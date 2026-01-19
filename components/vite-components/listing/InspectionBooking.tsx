import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Video,
  Camera,
  Home,
  Download,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface InspectionBookingProps {
  propertyAddress: string;
  propertyId: string;
  availableDates?: Date[];
  inspectionDuration?: number; // in minutes
}

type InspectionType = 'in-person' | 'virtual' | 'video-tour';
type BookingStep = 'type' | 'date' | 'time' | 'details' | 'confirm' | 'success';

export const InspectionBooking: React.FC<InspectionBookingProps> = ({
  propertyAddress,
  propertyId,
  availableDates = generateAvailableDates(),
  inspectionDuration = 30,
}) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<BookingStep>('type');
  const [inspectionType, setInspectionType] = useState<InspectionType>('in-person');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [attendeeDetails, setAttendeeDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  // Generate available time slots
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  const inspectionTypes = [
    {
      id: 'in-person' as InspectionType,
      title: 'In-Person Inspection',
      description: 'Visit the property in person with a guided tour',
      icon: Home,
      duration: '30 min',
      badge: 'Most Popular',
    },
    {
      id: 'virtual' as InspectionType,
      title: 'Live Virtual Tour',
      description: 'Real-time video walk-through with an agent',
      icon: Video,
      duration: '20 min',
      badge: 'Convenient',
    },
    {
      id: 'video-tour' as InspectionType,
      title: 'Pre-Recorded Video Tour',
      description: 'Watch a detailed video tour at your convenience',
      icon: Camera,
      duration: '15 min',
      badge: 'Available Now',
    },
  ];

  const handleNext = () => {
    const steps: BookingStep[] = ['type', 'date', 'time', 'details', 'confirm', 'success'];
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps: BookingStep[] = ['type', 'date', 'time', 'details', 'confirm', 'success'];
    const currentIndex = steps.indexOf(step);
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
    }
  };

  const handleConfirm = () => {
    // Generate booking reference
    const ref = `INS-${Date.now().toString(36).toUpperCase()}`;
    setBookingReference(ref);
    setBookingConfirmed(true);
    setStep('success');

    // In a real app, this would send data to backend
    console.log({
      propertyId,
      propertyAddress,
      inspectionType,
      date: selectedDate,
      time: selectedTime,
      attendeeDetails,
      reference: ref,
    });
  };

  const handleAddToCalendar = () => {
    if (!selectedDate || !selectedTime) return;

    const startDate = new Date(selectedDate);
    const [hours, minutes, ampm] = selectedTime.match(/(\d+):(\d+)\s*(AM|PM)/i)?.slice(1) || [];
    let hour = parseInt(hours);
    if (ampm?.toUpperCase() === 'PM' && hour !== 12) hour += 12;
    if (ampm?.toUpperCase() === 'AM' && hour === 12) hour = 0;

    startDate.setHours(hour, parseInt(minutes), 0, 0);
    const endDate = new Date(startDate.getTime() + inspectionDuration * 60000);

    const title = `Inspection: ${propertyAddress}`;
    const details = `Type: ${inspectionTypes.find(t => t.id === inspectionType)?.title}\\nReference: ${bookingReference}`;

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(details)}&location=${encodeURIComponent(propertyAddress)}`;

    window.open(googleCalendarUrl, '_blank');
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const calendarDays: Array<{ date: Date | null; available: boolean }> = [];

    // Empty slots for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendarDays.push({ date: null, available: false });
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      const isAvailable = availableDates.some(
        d => d.toDateString() === currentDate.toDateString() && d >= new Date()
      );
      calendarDays.push({ date: currentDate, available: isAvailable });
    }

    return calendarDays;
  };

  const renderStep = () => {
    switch (step) {
      case 'type':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-display mb-4">Select Inspection Type</h3>
            <div className="space-y-3">
              {inspectionTypes.map((type) => (
                <motion.button
                  key={type.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => {
                    setInspectionType(type.id);
                    setTimeout(handleNext, 200);
                  }}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    inspectionType === type.id
                      ? 'border-haus-gold bg-haus-gold/5'
                      : 'border-haus-stone hover:border-haus-gold/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      inspectionType === type.id ? 'bg-haus-gold text-haus-black' : 'bg-secondary'
                    }`}>
                      <type.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-space font-medium">{type.title}</h4>
                        {type.badge && (
                          <Badge variant="outline" className="text-xs border-haus-gold text-haus-gold">
                            {type.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                      <p className="text-xs text-haus-gold mt-1">Duration: {type.duration}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        );

      case 'date':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-display mb-4">Select Date</h3>

            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" size="icon" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}>
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <h4 className="font-space font-medium">
                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h4>
              <Button variant="ghost" size="icon" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}>
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center text-xs font-medium text-muted-foreground py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {getDaysInMonth(currentMonth).map((day, index) => (
                <button
                  key={index}
                  disabled={!day.date || !day.available}
                  onClick={() => day.date && setSelectedDate(day.date)}
                  className={`aspect-square p-2 rounded-lg text-sm font-space transition-all ${
                    !day.date
                      ? 'pointer-events-none'
                      : !day.available
                      ? 'text-muted-foreground/30 pointer-events-none'
                      : selectedDate?.toDateString() === day.date.toDateString()
                      ? 'bg-haus-gold text-haus-black'
                      : 'bg-secondary hover:bg-haus-gold/20'
                  }`}
                >
                  {day.date?.getDate()}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs pt-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-secondary"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-haus-gold"></div>
                <span>Selected</span>
              </div>
            </div>
          </div>
        );

      case 'time':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-display mb-4">Select Time</h3>
            <p className="text-sm text-muted-foreground">
              {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>
            <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
              {timeSlots.map((time) => (
                <motion.button
                  key={time}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedTime(time);
                    setTimeout(handleNext, 200);
                  }}
                  className={`py-3 px-4 rounded-lg text-sm font-space transition-all ${
                    selectedTime === time
                      ? 'bg-haus-gold text-haus-black'
                      : 'bg-secondary hover:bg-haus-gold/20'
                  }`}
                >
                  {time}
                </motion.button>
              ))}
            </div>
          </div>
        );

      case 'details':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-display mb-4">Your Details</h3>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>First Name</Label>
                <Input
                  value={attendeeDetails.firstName}
                  onChange={(e) => setAttendeeDetails({ ...attendeeDetails, firstName: e.target.value })}
                  placeholder="John"
                />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input
                  value={attendeeDetails.lastName}
                  onChange={(e) => setAttendeeDetails({ ...attendeeDetails, lastName: e.target.value })}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <Label>Email Address</Label>
              <Input
                type="email"
                value={attendeeDetails.email}
                onChange={(e) => setAttendeeDetails({ ...attendeeDetails, email: e.target.value })}
                placeholder="john.doe@email.com"
              />
            </div>

            <div>
              <Label>Phone Number</Label>
              <Input
                type="tel"
                value={attendeeDetails.phone}
                onChange={(e) => setAttendeeDetails({ ...attendeeDetails, phone: e.target.value })}
                placeholder="+61 400 000 000"
              />
            </div>

            <div>
              <Label>Notes (Optional)</Label>
              <Textarea
                value={attendeeDetails.notes}
                onChange={(e) => setAttendeeDetails({ ...attendeeDetails, notes: e.target.value })}
                placeholder="Any specific areas you'd like to focus on..."
                rows={3}
              />
            </div>
          </div>
        );

      case 'confirm':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-display mb-4">Confirm Booking</h3>

            <Card className="border- haus-stone bg-secondary/30">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-haus-gold mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Property</p>
                    <p className="font-medium">{propertyAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Home className="w-5 h-5 text-haus-gold mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Inspection Type</p>
                    <p className="font-medium">{inspectionTypes.find(t => t.id === inspectionType)?.title}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-haus-gold mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date & Time</p>
                    <p className="font-medium">
                      {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </p>
                    <p className="text-sm">{selectedTime}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-haus-gold mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Contact</p>
                    <p className="font-medium">{attendeeDetails.firstName} {attendeeDetails.lastName}</p>
                    <p className="text-sm">{attendeeDetails.email}</p>
                    <p className="text-sm">{attendeeDetails.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-start gap-2 p-3 bg-info/5 rounded-lg">
              <AlertCircle className="w-4 h-4 text-info mt-0.5 flex-shrink-0" />
              <p className="text-xs text-muted-foreground">
                You'll receive a confirmation email with calendar invitation and property access details.
              </p>
            </div>
          </div>
        );

      case 'success':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-4 py-6"
          >
            <div className="w-20 h-20 mx-auto bg-success/10 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10 text-success" />
            </div>

            <div>
              <h3 className="text-2xl font-display mb-2">Booking Confirmed!</h3>
              <p className="text-muted-foreground">Your inspection has been scheduled</p>
            </div>

            <Card className="border- haus-stone bg-secondary/30 max-w-sm mx-auto">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">Reference Number</p>
                <p className="text-2xl font-space font-bold text-haus-gold">{bookingReference}</p>
              </CardContent>
            </Card>

            <div className="space-y-2 pt-4">
              <p className="text-sm font-medium">{propertyAddress}</p>
              <p className="text-sm text-muted-foreground">
                {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-sm font-medium">{selectedTime}</p>
            </div>

            <div className="flex gap-2 pt-4">
              <Button onClick={handleAddToCalendar} className="flex-1 bg-foreground text-background">
                <Download className="w-4 h-4 mr-2" />
                Add to Calendar
              </Button>
              <Button onClick={() => setOpen(false)} variant="outline">
                Close
              </Button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 'type':
        return !!inspectionType;
      case 'date':
        return !!selectedDate;
      case 'time':
        return !!selectedTime;
      case 'details':
        return attendeeDetails.firstName && attendeeDetails.lastName &&
               attendeeDetails.email && attendeeDetails.phone;
      case 'confirm':
        return true;
      default:
        return false;
    }
  };

  const steps = ['type', 'date', 'time', 'details', 'confirm'];
  const currentStepIndex = steps.indexOf(step);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="w-full bg-haus-gold text-haus-black hover:bg-haus-gold/90 font-space"
      >
        <Calendar className="w-4 h-4 mr-2" />
        Book Inspection
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">Schedule Inspection</DialogTitle>
            {step !== 'success' && (
              <div className="flex items-center gap-2 mt-2">
                {steps.map((s, i) => (
                  <div
                    key={s}
                    className={`flex-1 h-1 rounded-full transition-all ${
                      i <= currentStepIndex ? 'bg-haus-gold' : 'bg-secondary'
                    }`}
                  />
                ))}
              </div>
            )}
          </DialogHeader>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          {step !== 'success' && (
            <div className="flex gap-3 mt-6 pt-4 border-t border- haus-stone">
              {currentStepIndex > 0 && (
                <Button onClick={handleBack} variant="outline" className="flex-1">
                  Back
                </Button>
              )}
              <Button
                onClick={currentStepIndex === steps.length - 1 ? handleConfirm : handleNext}
                disabled={!isStepValid()}
                className="flex-1 bg-haus-gold text-haus-black hover:bg-haus-gold/90"
                style={{ marginLeft: currentStepIndex === 0 ? 'auto' : undefined }}
              >
                {currentStepIndex === steps.length - 1 ? 'Confirm Booking' : 'Continue'}
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

// Helper function to generate available dates (next 30 days, excluding Sundays)
function generateAvailableDates(): Date[] {
  const dates: Date[] = [];
  const today = new Date();

  for (let i = 1; i <= 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    // Exclude Sundays
    if (date.getDay() !== 0) {
      dates.push(date);
    }
  }

  return dates;
}
