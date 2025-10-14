import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FeatherColumn } from "@/components/ui/laurel-icon";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  BookOpen,
  Briefcase,
  Building,
  GraduationCap,
  Users,
  MapPin,
  TrendingUp,
  Heart,
  Star
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <FeatherColumn side="left" spacing={100} />
      <FeatherColumn side="right" spacing={100} />
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            {/* Left Column - Candidate Info */}
            <div className="text-left">
              <div className="mb-8">
                <div className="mb-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
                    Osun State Governor Race 2026
                  </h2>
                  <Badge variant="outline" className="mb-4 text-base px-4 py-2 text-lg font-medium border-primary/30 text-primary">
                    Official Campaign Website
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-sm px-3 py-1">
                    Former Senator
                  </Badge>
                  <Badge className="bg-accent/10 text-accent hover:bg-accent/20 text-sm px-3 py-1">
                    PhD, FNSE, FAEng
                  </Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-sm px-3 py-1">
                    APC National Secretary
                  </Badge>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Sen{" "}
                <span className="text-primary">Iyiola Omisore</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/90 mb-4 font-medium">
                Candidate for Osun State Governor 2026 • Former Senator • Engineering Expert
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                A distinguished Nigerian leader and APC candidate for Osun State Governor with extensive experience in governance,
                engineering excellence, and economic development. Sen Omisore brings
                proven leadership and technical expertise to transform Osun State in 2026.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#platform">View Platform</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/volunteers">Join Campaign</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Candidate Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-96 lg:w-[32rem] lg:h-[32rem] xl:w-[40rem] xl:h-[40rem] rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
        <Image
                    src="/header-picture-2.jpeg"
                    alt="Sen Iyiola Omisore - Gubernatorial Candidate for Osun State"
                    width={640}
                    height={640}
                    className="w-full h-full object-cover object-center"
          priority
        />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey & Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Journey of Excellence
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              From engineering innovation to political leadership, Sen Omisore&apos;s remarkable journey of service and achievement
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Career Timeline */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Professional Timeline</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Engineering Pioneer (1980s-1990s)</h4>
                        <p className="text-foreground/80 mb-3">
                          Founded CHRISORE ENGINEERING LTD and Mechelec Consultants Ltd, executing major infrastructure projects
                          including CBN Housing Estate, NNPC facilities, Chevron Headquarters, and international airport construction.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Project Management</Badge>
                          <Badge variant="outline">Infrastructure Development</Badge>
                          <Badge variant="outline">Engineering Excellence</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                    alt="Engineering and construction projects"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Engineering Excellence</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                    alt="Political leadership and governance"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Political Leadership</p>
                  </div>
                </div>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Political Leadership (1999-2011)</h4>
                        <p className="text-foreground/80 mb-3">
                          Served as Deputy Governor of Osun State (1999-2003) and Senator representing Osun East
                          (2003-2011), focusing on economic development and infrastructure policy.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Governance</Badge>
                          <Badge variant="outline">Economic Policy</Badge>
                          <Badge variant="outline">Legislative Leadership</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">National Leadership (2011-Present)</h4>
                        <p className="text-foreground/80 mb-3">
                          Current National Secretary of the All Progressives Congress (APC), providing strategic direction
                          for Africa&apos;s largest political party and advancing national development initiatives.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Party Leadership</Badge>
                          <Badge variant="outline">National Strategy</Badge>
                          <Badge variant="outline">Policy Development</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                    alt="National leadership and party management"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">National Leadership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Projects & Achievements */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Transformative Projects Led
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Major infrastructure and development initiatives that demonstrate Sen Omisore&apos;s engineering expertise and leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">Central Bank of Nigeria</CardTitle>
                <CardDescription className="text-foreground/70">
                  Housing Estate Complex - Major residential development project in Abuja
                </CardDescription>
              </CardHeader>
              <div className="relative h-32 mx-4 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                  alt="Central Bank of Nigeria Housing Estate"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </Card>

            <Card className="text-center border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-lg text-foreground">NNPC Housing Estates</CardTitle>
                <CardDescription className="text-foreground/70">
                  Comprehensive residential developments for Nigeria&apos;s national oil corporation
                </CardDescription>
              </CardHeader>
              <div className="relative h-32 mx-4 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                  alt="NNPC Housing Estates"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </Card>

            <Card className="text-center border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">Chevron Headquarters</CardTitle>
                <CardDescription className="text-foreground/70">
                  Corporate headquarters complex for international oil and gas operations
                </CardDescription>
              </CardHeader>
              <div className="relative h-32 mx-4 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                  alt="Chevron Headquarters"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </Card>

            <Card className="text-center border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-lg text-foreground">Airport Construction</CardTitle>
                <CardDescription className="text-foreground/70">
                  19 airfield projects including Makurdi Air Force Base and regional airports
                </CardDescription>
              </CardHeader>
              <div className="relative h-32 mx-4 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                  alt="Airport Construction Projects"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </Card>

            <Card className="text-center border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">Educational Infrastructure</CardTitle>
                <CardDescription className="text-foreground/70">
                  University hospitals, teaching hospitals, and educational facility development
                </CardDescription>
              </CardHeader>
              <div className="relative h-32 mx-4 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                  alt="Educational Infrastructure"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </Card>

            <Card className="text-center border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-lg text-foreground">Industrial Development</CardTitle>
                <CardDescription className="text-foreground/70">
                  Rice mills, flour mills, and manufacturing facilities across Nigeria
                </CardDescription>
              </CardHeader>
              <div className="relative h-32 mx-4 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                  alt="Industrial Development Projects"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic & Thought Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Academic Excellence & Thought Leadership
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Sen Omisore&apos;s contributions to academia, policy discourse, and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Published Works</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-foreground/80 mb-4">
                  Author of globally recognized professional publications on public-private partnerships,
                  infrastructure development, and economic policy frameworks.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Public-Private Partnership: Infrastructure & Procurement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Economic Policy & Budget Implementation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Engineering Strategies for National Development</span>
                  </div>
                </div>
              </CardContent>
              <div className="relative h-32 mx-6 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                  alt="Academic publishing and research"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Academic Lectures & Addresses</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-foreground/80 mb-4">
                  Delivered keynote addresses and convocation lectures at prestigious institutions
                  on economic policy, engineering strategies, and governance.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                    <span className="text-sm">Ladoke Akintola University of Technology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                    <span className="text-sm">Institute of Chartered Accountants of Nigeria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                    <span className="text-sm">International Conference on Solid Waste Technology</span>
                  </div>
                </div>
              </CardContent>
              <div className="relative h-32 mx-6 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                  alt="Academic lectures and conferences"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Policy Expertise Areas */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Areas of Policy Expertise
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Sen Omisore&apos;s specialized knowledge and experience in critical development areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">Engineering & Technical Education</CardTitle>
                <CardDescription className="text-foreground/70">
                  Advocate for engineering and technical/vocational education reforms
                </CardDescription>
              </CardHeader>
              <div className="relative h-24 mx-4 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                  alt="Engineering and technical education"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </Card>

            <Card className="text-center border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg text-foreground">Public-Private Partnerships</CardTitle>
                <CardDescription className="text-foreground/70">
                  Expert in infrastructure development and procurement frameworks
                </CardDescription>
              </CardHeader>
              <div className="relative h-24 mx-4 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                  alt="Public-private partnerships and infrastructure"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </Card>

            <Card className="text-center border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">Economic Development</CardTitle>
                <CardDescription className="text-foreground/70">
                  Strategic focus on job creation and sustainable economic growth
                </CardDescription>
              </CardHeader>
              <div className="relative h-24 mx-4 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                  alt="Economic development and growth"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </Card>

            <Card className="text-center border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg text-foreground">Bretton Woods Institutions</CardTitle>
                <CardDescription className="text-foreground/70">
                  Consultant for World Bank, IMF, and international development organizations
                </CardDescription>
              </CardHeader>
              <div className="relative h-24 mx-4 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80"
                  alt="International development and institutions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision for Osun State */}
      <section id="platform" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vision for Osun State
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Sen Omisore&apos;s comprehensive plan to transform Osun State through proven leadership and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Infrastructure Revolution</CardTitle>
                <CardDescription>
                  Modern roads, power systems, and transportation networks using engineering expertise
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Education Excellence</CardTitle>
                <CardDescription>
                  Technical and vocational training programs to empower Osun State&apos;s youth
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Economic Empowerment</CardTitle>
                <CardDescription>
                  Job creation through industrial development and entrepreneurship programs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Healthcare Access</CardTitle>
                <CardDescription>
                  Quality healthcare infrastructure and services for all citizens
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Governance Reform</CardTitle>
                <CardDescription>
                  Transparent, accountable leadership with measurable results
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Agricultural Innovation</CardTitle>
                <CardDescription>
                  Modern farming techniques and value chain development
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/about-the-state">View Detailed Platform</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Movement for Progress
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Support Sen Iyiola Omisore&apos;s vision for a prosperous Osun State.
              Together, we can build a future of opportunity and development for all citizens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/volunteers">Join Our Campaign</Link>
              </Button>
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300" asChild>
                <Link href="/donations">Support Our Cause</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="h-8 w-12 rounded border border-gray-200 overflow-hidden">
                <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Nigerian Flag - Green White Green vertical stripes */}
                  <rect width="16" height="32" fill="#008751"/>
                  <rect x="16" width="16" height="32" fill="#FFFFFF"/>
                  <rect x="32" width="16" height="32" fill="#008751"/>
                </svg>
              </div>
              <span className="font-bold text-xl">Senator Iyiola Omisore Campaign</span>
            </div>
            <Separator className="my-6" />
            <p className="text-sm text-foreground/70">
              © 2025 Senator Iyiola Omisore Campaign. Building a prosperous future for Osun State together.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
