import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users } from "lucide-react";
import { LocationMap } from "@/components/ui/location-map";

export default function Schedule() {
  const tourSchedule = [
    {
      date: "14th October 2025",
      day: "Tuesday",
      locations: ["Ifedayo", "Ila"],
      status: "current",
      description: "Launching our Rescue Mission tour in the historic regions of Ifedayo and Ila"
    },
    {
      date: "15th October 2025",
      day: "Wednesday",
      locations: ["Orolu", "Irepodun"],
      status: "upcoming",
      description: "Meeting with community leaders and residents in Orolu and Irepodun"
    },
    {
      date: "16th October 2025",
      day: "Thursday",
      locations: ["Isokan", "Irewole", "Ayedade"],
      status: "upcoming",
      description: "Triple LGA visit covering the vibrant communities of Isokan, Irewole, and Ayedade"
    },
    {
      date: "20th October 2025",
      day: "Monday",
      locations: ["Obokun", "Oriade"],
      status: "upcoming",
      description: "Engaging with the people of Obokun and Oriade on local development"
    },
    {
      date: "21st October 2025",
      day: "Tuesday",
      locations: ["Boluwaduro", "Boripe"],
      status: "upcoming",
      description: "Town hall meetings and community outreach in Boluwaduro and Boripe"
    },
    {
      date: "22nd October 2025",
      day: "Wednesday",
      locations: ["Ede North", "Ede South"],
      status: "upcoming",
      description: "Comprehensive engagement with the historic Ede communities"
    },
    {
      date: "28th October 2025",
      day: "Tuesday",
      locations: ["Odo Otin", "Ifelodun"],
      status: "upcoming",
      description: "Visiting the agricultural heartlands of Odo Otin and Ifelodun"
    },
    {
      date: "29th October 2025",
      day: "Wednesday",
      locations: ["Ejigbo", "Egbedore"],
      status: "upcoming",
      description: "Meeting stakeholders and youth groups in Ejigbo and Egbedore"
    },
    {
      date: "30th October 2025",
      day: "Thursday",
      locations: ["Atakumosa East", "Atakumosa West"],
      status: "upcoming",
      description: "Discussing rural development in Atakumosa regions"
    },
    {
      date: "4th November 2025",
      day: "Tuesday",
      locations: ["Iwo", "Ayedire", "Olaoluwa"],
      status: "upcoming",
      description: "Triple community visit to Iwo, Ayedire, and Olaoluwa regions"
    },
    {
      date: "5th November 2025",
      day: "Wednesday",
      locations: ["Ife South", "Ife North"],
      status: "upcoming",
      description: "Connecting with the ancient communities of Ife South and North"
    },
    {
      date: "6th November 2025",
      day: "Thursday",
      locations: ["Ilesa East", "Ilesa West"],
      status: "upcoming",
      description: "Engaging with the dynamic communities of Ilesa"
    },
    {
      date: "11th November 2025",
      day: "Tuesday",
      locations: ["Ife East", "Ife Central", "Modakeke"],
      status: "upcoming",
      description: "Special engagement in the heart of Ile-Ife and Modakeke"
    },
    {
      date: "12th November 2025",
      day: "Wednesday",
      locations: ["Osogbo", "Olorunda"],
      status: "upcoming",
      description: "Concluding our tour in the state capital region"
    }
  ];

  // Function to calculate event status based on current date
  const getEventStatus = (eventDate: string) => {
    const currentDate = new Date();

    // Parse the date string (e.g., "14th October 2025")
    const dateMatch = eventDate.match(/(\d+)(?:st|nd|rd|th)\s+(\w+)\s+(\d+)/);
    if (!dateMatch) return 'upcoming';

    const day = parseInt(dateMatch[1]);
    const monthName = dateMatch[2];
    const year = parseInt(dateMatch[3]);

    const monthNames = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
      'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    };

    const eventDateTime = new Date(year, monthNames[monthName as keyof typeof monthNames], day);

    // Enhanced date comparison with time consideration
    if (currentDate < eventDateTime) {
      return 'upcoming';
    } else if (currentDate.toDateString() === eventDateTime.toDateString()) {
      return 'current';
    } else {
      return 'completed';
    }
  };

  // Calculate progress based on completed events
  const eventsWithStatus = tourSchedule.map(event => ({
    ...event,
    status: getEventStatus(event.date)
  }));

  const completedEvents = eventsWithStatus.filter(event => event.status === 'completed').length;
  const currentEvent = eventsWithStatus.find(event => event.status === 'current');
  const totalEvents = tourSchedule.length;
  const progressPercentage = (completedEvents / totalEvents) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-10 lg:mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-2xl -mx-2 sm:-mx-4 lg:-mx-6"></div>
          <div className="relative z-10 p-4 sm:p-6 lg:p-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight">
              Rescue Mission – <span className="block">Local Government Tour</span>
            </h1>
            <div className="flex flex-col items-center gap-3 mb-6 lg:mb-8">
              <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full border border-primary/20 shadow-md">
                <h2 className="text-xl sm:text-2xl font-bold text-primary">Senator Iyiola Omisore</h2>
              </div>
              <div className="flex flex-col items-center text-muted-foreground text-sm sm:text-base bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50">
                <p className="font-semibold">For Governor, Osun State</p>
                <p className="text-primary font-medium">Party: <span className="text-accent">APC</span></p>
              </div>
            </div>
            <p className="text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-6 lg:mb-8">
              Join us as we embark on a comprehensive tour across all Local Government Areas of Osun State.
              Your voice matters in building a better future for our state.
            </p>

            {/* Enhanced Progress Bar */}
            <div className="mx-auto max-w-sm sm:max-w-md">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span className="font-medium">Tour Progress</span>
                <span className="font-bold text-primary">{completedEvents}/{totalEvents}</span>
              </div>
              <div className="relative">
                <div className="w-full bg-muted/50 rounded-full h-2 sm:h-3 shadow-inner">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out shadow-sm"
                    style={{ width: `${progressPercentage}%` }}
                  >
                  </div>
                </div>
                <div className="text-xs text-center mt-1 text-muted-foreground">
                  {Math.round(progressPercentage)}% Complete
                </div>
              </div>
              {currentEvent && (
                <div className="mt-4 p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 shadow-md">
                  <p className="text-sm font-bold text-primary mb-1">
                    🔴 Currently Active: {currentEvent.locations.join(", ")}
                  </p>
                  <p className="text-xs text-foreground/80">
                    {currentEvent.date} - {currentEvent.day}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Enhanced Timeline Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-accent/30 to-primary/50 rounded-full hidden md:block shadow-sm"></div>

          <div className="space-y-4 lg:space-y-6">
            {eventsWithStatus.map((event, index) => (
              <div key={index} className="relative">
                {/* Enhanced Timeline Dot */}
                <div className={`hidden md:flex absolute -left-8 top-8 w-6 h-6 rounded-full border-4 border-background z-20 shadow-lg transition-all duration-300 ${
                  event.status === 'completed'
                    ? 'bg-gradient-to-br from-primary to-primary/90 border-primary/40 shadow-primary/25'
                    : event.status === 'current'
                    ? 'bg-gradient-to-br from-accent to-accent/95 border-accent/70 shadow-accent/50 ring-2 ring-accent/30'
                    : 'bg-gradient-to-br from-muted to-muted/90 border-muted/60 hover:border-primary/40'
                }`}>
                  <div className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${
                    event.status === 'completed'
                      ? 'bg-white/90'
                      : event.status === 'current'
                      ? 'bg-white/95'
                      : 'bg-background/50'
                  }`}>
                    {event.status === 'completed' && (
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    {event.status === 'current' && (
                      <div className="w-2 h-2 bg-accent/90 rounded-full"></div>
                    )}
                  </div>
                </div>

                {/* Event Card */}
                <Card className={`group w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm ${
                  event.status === 'current'
                    ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-card shadow-lg'
                    : event.status === 'completed'
                    ? 'opacity-90'
                    : 'hover:bg-gradient-to-br hover:from-accent/5 hover:to-card'
                }`}>
                  <div className="flex flex-col lg:flex-row">
                    {/* Left Column - Event Details */}
                    <div className="flex-1 lg:pr-6">
                      <CardHeader className={`pb-4 sm:pb-6 transition-all duration-300 ${
                        event.status === 'current' ? 'bg-gradient-to-r from-primary/5 to-transparent' : ''
                      }`}>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-full transition-all duration-300 ${
                              event.status === 'completed'
                                ? 'bg-primary/10'
                                : event.status === 'current'
                                ? 'bg-primary/20 shadow-md'
                                : 'bg-muted group-hover:bg-primary/5'
                            }`}>
                              <Calendar className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-300 ${
                                event.status === 'completed'
                                  ? 'text-primary'
                                  : event.status === 'current'
                                  ? 'text-primary'
                                  : 'text-muted-foreground group-hover:text-primary'
                              }`} />
                            </div>
                            <div>
                              <span className={`font-bold text-lg sm:text-xl transition-colors duration-300 ${
                                event.status === 'completed'
                                  ? 'text-muted-foreground'
                                  : event.status === 'current'
                                  ? 'text-primary'
                                  : 'text-foreground group-hover:text-primary'
                              }`}>
                                {event.date}
                              </span>
                              <span className="text-sm text-muted-foreground ml-2">({event.day})</span>
                            </div>
                          </div>
                          <Badge
                            variant={event.status === 'completed' ? 'default' : 'outline'}
                            className={`text-xs w-fit px-3 py-1 font-medium transition-all duration-300 ${
                              event.status === 'completed'
                                ? 'bg-primary/80 text-primary-foreground shadow-sm'
                                : event.status === 'current'
                                ? 'bg-accent text-accent-foreground border-accent/60 shadow-sm'
                                : 'border-muted-foreground/30 hover:border-primary/50'
                            }`}
                          >
                            {event.status === 'completed' ? '✓ Completed' :
                             event.status === 'current' ? '● In Progress' : '○ Upcoming'}
                          </Badge>
                        </div>

                        <CardTitle className={`text-xl sm:text-2xl mb-3 transition-colors duration-300 ${
                          event.status === 'current' ? 'text-primary' : 'text-foreground'
                        }`}>
                          {event.locations.join(" & ")}
                        </CardTitle>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {event.locations.map((location, locIndex) => (
                            <Badge
                              key={locIndex}
                              variant="outline"
                              className={`bg-gradient-to-r from-primary/10 to-accent/5 text-primary border-primary/30 text-sm px-3 py-1 transition-all duration-300 hover:scale-105 ${
                                event.status === 'current' ? 'border-primary/50 bg-primary/10' : ''
                              }`}
                            >
                              {location}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0 pb-6">
                        <CardDescription className={`text-base leading-relaxed mb-6 transition-colors duration-300 ${
                          event.status === 'current' ? 'text-foreground/90' : 'text-muted-foreground'
                        }`}>
                          {event.description}
                        </CardDescription>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            size="sm"
                            className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                              event.status === 'current'
                                ? 'bg-primary hover:bg-primary/90 shadow-md'
                                : 'hover:bg-primary/90'
                            }`}
                          >
                            <MapPin className="h-4 w-4" />
                            View Location
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:border-primary/50 ${
                              event.status === 'current' ? 'border-primary/50 bg-primary/5' : ''
                            }`}
                          >
                            <Users className="h-4 w-4" />
                            Register Interest
                          </Button>
                        </div>
                      </CardContent>
                    </div>

                    {/* Right Column - Location Map */}
                    <div className={`lg:w-80 xl:w-96 lg:border-l lg:border-border/20 lg:pl-6 lg:pr-4 transition-all duration-300 ${
                      event.status === 'current' ? 'lg:border-primary/30' : ''
                    }`}>
                      <div className="h-full">
                        <div className={`p-4 rounded-xl transition-all duration-300 ${
                          event.status === 'current'
                            ? 'bg-primary/5 border border-primary/20'
                            : 'bg-muted/30 border border-border/50'
                        }`}>
                          <h4 className={`text-sm font-semibold mb-3 transition-colors duration-300 ${
                            event.status === 'current' ? 'text-primary' : 'text-muted-foreground'
                          }`}>
                            📍 Event Location
                          </h4>
                          <LocationMap
                            locations={event.locations}
                            height="200px"
                            className={`rounded-lg transition-all duration-300 ${
                              event.status === 'current' ? 'ring-2 ring-primary/20' : ''
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 lg:mt-10 p-3 sm:p-4 lg:p-6 bg-primary/5 rounded-lg border border-primary/20">
          <div className="text-center mb-4 lg:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Want to Host a Community Meeting?</h2>
            <p className="text-sm sm:text-base text-foreground/80 max-w-2xl mx-auto">
              If you&apos;re a community leader or LGA representative interested in hosting Senator Omisore
              in your area, we&apos;d love to hear from you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a href="/contact">Contact Campaign Team</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <a href="/volunteers">Volunteer to Help</a>
            </Button>
          </div>
        </div>

        {/* Tour Summary */}
        <div className="mt-8 lg:mt-10 text-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-3xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-3 sm:pt-4">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">{totalEvents}</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Total Tour Stops</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-3 sm:pt-4">
                <div className="text-xl sm:text-2xl font-bold text-accent mb-1">30</div>
                <p className="text-xs sm:text-sm text-muted-foreground">LGAs Covered</p>
              </CardContent>
            </Card>

            <Card className="text-center sm:col-span-1">
              <CardContent className="pt-3 sm:pt-4">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">100%</div>
                <p className="text-xs sm:text-sm text-muted-foreground">State Coverage</p>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
