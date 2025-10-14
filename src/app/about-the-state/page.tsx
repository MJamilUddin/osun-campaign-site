import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OsunImage } from "@/components/ui/osun-images";
import {
  MapPin,
  Users,
  Building,
  TreePine,
  GraduationCap,
  TrendingUp,
  Mountain,
  Calendar,
  Award,
  Gem,
  Wheat,
  Factory,
  Zap,
  Car,
  BookOpen,
  Music,
  Camera,
  Home
} from "lucide-react";

export default function AboutOsunState() {
  return (
    <div>
      <div className="relative mb-20 h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <OsunImage
            query="Osun State landscape"
            alt="Osun State landscape showing lush greenery and traditional architecture"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
              <Badge className="mb-6 text-base sm:text-lg px-5 py-2.5 bg-black/30 text-white hover:bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl transition-all duration-300 hover:scale-105">
                Discover Osun State
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-[1.1] text-shadow-lg">
                Osun State: 
                <span className="text-white block mt-2 md:mt-3 text-shadow-lg">
                  State of the Living Spring
                </span>
              </h1>
              <div className="relative mb-8 md:mb-10">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl"></div>
                <p className="relative text-lg sm:text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed px-6 py-4 text-shadow-lg">
                  Located in southwestern Nigeria, Osun State is renowned for its rich cultural heritage,
                  agricultural productivity, and historical significance in Yoruba civilization.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="group relative">
                  <div className="absolute inset-0 bg-white/5 rounded-full blur-xl transition-all duration-300 group-hover:bg-white/10"></div>
                  <div className="relative inline-flex items-center gap-2 text-sm font-medium bg-black/50 px-6 py-3 rounded-full backdrop-blur-md text-white/90 border border-white/20 shadow-2xl hover:bg-black/60 transition-all duration-300 hover:scale-[1.02]">
                    <svg className="w-4 h-4 text-primary/90" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-shadow-sm tracking-wide">Welcome to the Heart of Yoruba Culture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

        {/* Quick Facts - Enhanced Card Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Established</h3>
              <p className="text-sm text-muted-foreground">August 27, 1991</p>
              <div className="mt-3 text-xs text-primary/70 font-medium">State Creation</div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Population</h3>
              <p className="text-sm text-muted-foreground">~4.7 million</p>
              <div className="mt-3 text-xs text-accent-foreground/70 font-medium">Growing Community</div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Capital</h3>
              <p className="text-sm text-muted-foreground">Osogbo</p>
              <div className="mt-3 text-xs text-primary/70 font-medium">Administrative Center</div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TreePine className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">LGAs</h3>
              <p className="text-sm text-muted-foreground">30 Local Government Areas</p>
              <div className="mt-3 text-xs text-accent-foreground/70 font-medium">Administrative Divisions</div>
            </CardContent>
          </Card>
        </div>

        {/* History & Heritage - Enhanced Card Layout with Gallery */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Historical Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Rich Historical Heritage</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              From ancient Yoruba civilization to modern statehood, Osun State&apos;s history is a testament to enduring cultural strength
            </p>
          </div>

          {/* Historical Sites Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="relative group cursor-pointer">
              <OsunImage
                query="Ile Ife historical site"
                alt="Ancient Ile-Ife historical site in Nigeria"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium">Ile-Ife Heritage</p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <OsunImage
                query="Yoruba traditional architecture"
                alt="Traditional Yoruba architecture in Osun State"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium">Traditional Architecture</p>
              </div>
            </div>
            <div className="relative group cursor-pointer md:col-span-2 lg:col-span-1">
              <OsunImage
                query="Osun State historical landmarks"
                alt="Historical landmarks and monuments in Osun State"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium">Historical Landmarks</p>
              </div>
            </div>
          </div>

          {/* Timeline-style layout */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

              <div className="space-y-12">
                {/* Ancient Origins Card */}
                <div className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <Card className="flex-1 group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">Ancient Origins</CardTitle>
                      <CardDescription className="text-base">
                        The Yoruba Kingdom of Ile-Ife
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80 leading-relaxed">
                        The area now known as Osun State was historically part of the Yoruba kingdom of Ile-Ife,
                        considered the ancestral homeland of the Yoruba people. This region has been inhabited
                        for centuries and played a crucial role in the development of Yoruba culture and civilization.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Modern Statehood Card */}
                <div className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center border-2 border-accent/20">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <Card className="flex-1 group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl text-accent">Modern Statehood</CardTitle>
                      <CardDescription className="text-base">
                        State Creation & The Osun River Legacy
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80 leading-relaxed">
                        Osun State was created on August 27, 1991, by the military administration of General Ibrahim Babangida,
                        carved out from the old Oyo State. The creation was part of a nationwide state creation exercise
                        that increased Nigeria&apos;s states from 21 to 30. The state was named after the Osun River,
                        which holds deep spiritual significance in Yoruba tradition as the home of the river goddess Osun.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mt-16 flex justify-center">
            <div className="relative w-full max-w-2xl">
              <OsunImage
                query="Yoruba culture heritage"
                alt="Ancient Yoruba artifacts and historical sites in Osun State"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Cultural Heritage Preservation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Geography & Demographics - Interactive Cards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Geographic Profile</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Geography & People</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Strategically located in Nigeria&apos;s southwestern region with diverse landscapes and vibrant communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Location Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg">Location & Coordinates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  Located at coordinates 07°30′N 4°30′E, Osun State covers an area of approximately 9,251 km²
                  in southwestern Nigeria, bordered by Kwara, Ekiti, Ondo, Ogun, and Oyo states.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium text-primary">Area:</span>
                    <span className="text-sm font-bold">9,251 km²</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-accent/5 rounded-lg">
                    <span className="text-sm font-medium text-accent">Coordinates:</span>
                    <span className="text-sm font-bold">7.5°N, 4.5°E</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Demographics Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-accent/5 to-transparent">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent/15 to-accent/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-lg">Demographics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  Home to approximately 4.7 million people, Osun State is predominantly Yoruba-speaking
                  with a rich cultural heritage and diverse ethnic composition.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium text-primary">Population:</span>
                    <span className="text-sm font-bold">~4.7 million</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-accent/5 rounded-lg">
                    <span className="text-sm font-medium text-accent">Major Ethnic Group:</span>
                    <span className="text-sm font-bold">Yoruba</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-secondary/5 rounded-lg">
                    <span className="text-sm font-medium text-secondary-foreground">LGAs:</span>
                    <span className="text-sm font-bold">30</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Geography Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-transparent md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mountain className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg">Geography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  The state features diverse topography including savanna grasslands, tropical rainforests,
                  and the Osun River basin. The landscape supports both agricultural activities and urban development.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium text-primary">Terrain:</span>
                    <span className="text-sm font-bold">Savanna & Forest</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-accent/5 rounded-lg">
                    <span className="text-sm font-medium text-accent">Major River:</span>
                    <span className="text-sm font-bold">Osun River</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-secondary/5 rounded-lg">
                    <span className="text-sm font-medium text-secondary-foreground">Climate:</span>
                    <span className="text-sm font-bold">Tropical</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Geography Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group cursor-pointer">
              <OsunImage
                query="Osun State savanna landscape"
                alt="Savanna landscape in Osun State Nigeria"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium">Savanna Landscape</p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <OsunImage
                query="Osun River Nigeria"
                alt="Osun River flowing through Osun State"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium">Osun River</p>
              </div>
            </div>
            <div className="relative group cursor-pointer md:col-span-2 lg:col-span-1">
              <OsunImage
                query="Nigerian tropical forest"
                alt="Tropical forest landscape in Nigeria"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium">Tropical Forest</p>
              </div>
            </div>
          </div>
        </section>

        {/* Economy & Resources - Enhanced Card Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Economic Strength</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Economy & Natural Resources</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Osun State boasts abundant natural resources and a thriving agricultural sector that drives sustainable economic growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Agricultural Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Wheat className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg">Agricultural Powerhouse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  Leading producer of cocoa, kolanuts, cassava, maize, and yam. The state&apos;s fertile soil
                  and favorable climate support extensive farming activities.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-xs font-medium">Major cash crops</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-accent/5 rounded-lg">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                    <span className="text-xs font-medium">Food crop cultivation</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-secondary/5 rounded-lg">
                    <div className="w-2 h-2 bg-secondary-foreground rounded-full"></div>
                    <span className="text-xs font-medium">Fisheries and livestock</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mineral Resources Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-accent/5 to-transparent">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent/15 to-accent/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Gem className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-lg">Mineral Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  Rich deposits of gold, kaolin, clay, granite, and limestone. Mining activities
                  contribute significantly to the state&apos;s economy and employment.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-xs font-medium">Gold mining operations</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-accent/5 rounded-lg">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                    <span className="text-xs font-medium">Kaolin and clay extraction</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-secondary/5 rounded-lg">
                    <div className="w-2 h-2 bg-secondary-foreground rounded-full"></div>
                    <span className="text-xs font-medium">Granite quarrying</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Industrial Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-primary/5 to-transparent md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Factory className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg">Industrial Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  Growing manufacturing sector including food processing, textile production,
                  and construction materials. Strategic location supports trade and commerce.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-xs font-medium">Food processing plants</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-accent/5 rounded-lg">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                    <span className="text-xs font-medium">Textile manufacturing</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-secondary/5 rounded-lg">
                    <div className="w-2 h-2 bg-secondary-foreground rounded-full"></div>
                    <span className="text-xs font-medium">Construction materials</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Agricultural Products Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="relative group cursor-pointer">
              <OsunImage
                query="Nigerian cocoa farming"
                alt="Cocoa farming in Nigeria"
                width={250}
                height={200}
                className="w-full h-40 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs font-medium">Cocoa Production</p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <OsunImage
                query="Nigerian cassava farming"
                alt="Cassava farming in Nigeria"
                width={250}
                height={200}
                className="w-full h-40 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs font-medium">Cassava Farming</p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <OsunImage
                query="Nigerian yam farming"
                alt="Yam farming in Nigeria"
                width={250}
                height={200}
                className="w-full h-40 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs font-medium">Yam Cultivation</p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <OsunImage
                query="Nigerian kolanut farming"
                alt="Kolanut farming in Nigeria"
                width={250}
                height={200}
                className="w-full h-40 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs font-medium">Kolanut Production</p>
              </div>
            </div>
          </div>

          {/* Featured Agricultural Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl">
              <OsunImage
                query="Nigerian agriculture farming"
                alt="Agricultural fields and farming activities in Osun State"
                width={800}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-bold">Agricultural Excellence</p>
                <p className="text-sm opacity-90">Sustainable farming powering Osun&apos;s economy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Tourism - Interactive Cards with Gallery */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Cultural Heritage</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Culture & Tourism</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              The &quot;State of the Living Spring&quot; - rich cultural heritage and natural attractions that showcase Yoruba civilization
            </p>
          </div>

          {/* Cultural Heritage Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Cultural Heritage Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Music className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Cultural Heritage</CardTitle>
                <CardDescription className="text-base">
                  Deeply rooted in Yoruba tradition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
                  Deeply rooted in Yoruba tradition with vibrant festivals, traditional arts, and crafts.
                  The Osun-Osogbo Sacred Grove is a UNESCO World Heritage Site, preserving ancient Yoruba spiritual practices.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Osun-Osogbo Festival</h4>
                      <p className="text-xs text-muted-foreground">Annual celebration honoring the river goddess Osun</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Traditional Crafts</h4>
                      <p className="text-xs text-muted-foreground">Adire textile dyeing and bronze casting</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary/5 rounded-lg">
                    <div className="w-2 h-2 bg-secondary-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Yoruba Language</h4>
                      <p className="text-xs text-muted-foreground">Official language alongside English</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tourist Attractions Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-accent/5 to-transparent">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent/15 to-accent/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-xl">Tourist Attractions</CardTitle>
                <CardDescription className="text-base">
                  Natural and cultural wonders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
                  Natural and cultural attractions draw visitors from around the world.
                  From sacred groves to historical sites, Osun State offers diverse tourism experiences.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Osun-Osogbo Sacred Grove</h4>
                      <p className="text-xs text-muted-foreground">UNESCO World Heritage Site</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Erin-Ijesha Waterfalls</h4>
                      <p className="text-xs text-muted-foreground">Seven-step cascading waterfalls</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary/5 rounded-lg">
                    <div className="w-2 h-2 bg-secondary-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Ile-Ife Heritage Sites</h4>
                      <p className="text-xs text-muted-foreground">Ancient Yoruba civilization center</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cultural Heritage Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="relative group cursor-pointer">
              <OsunImage
                query="Yoruba traditional festival"
                alt="Traditional Yoruba festival celebration"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium">Cultural Festival</p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <OsunImage
                query="Nigerian traditional crafts"
                alt="Traditional Nigerian crafts and artistry"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium">Traditional Crafts</p>
              </div>
            </div>
            <div className="relative group cursor-pointer md:col-span-2 lg:col-span-1">
              <OsunImage
                query="Osun Osogbo Sacred Grove"
                alt="Osun-Osogbo Sacred Grove and traditional Yoruba cultural celebrations"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium">Sacred Heritage Site</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Infrastructure - Enhanced Cards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Development Foundation</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Education & Infrastructure</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Strong educational foundation and developing infrastructure supporting sustainable growth and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Educational Excellence Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg">Educational Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  Home to several universities and educational institutions including Obafemi Awolowo University,
                  one of Nigeria&apos;s premier universities.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-xs font-medium">Obafemi Awolowo University</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-accent/5 rounded-lg">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                    <span className="text-xs font-medium">Osun State University</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-secondary/5 rounded-lg">
                    <div className="w-2 h-2 bg-secondary-foreground rounded-full"></div>
                    <span className="text-xs font-medium">Polytechnics and colleges</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Power & Utilities Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-accent/5 to-transparent">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent/15 to-accent/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-lg">Power & Utilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  Access to electricity and utilities is improving with ongoing infrastructure development
                  and rural electrification programs.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-xs font-medium">Rural electrification initiatives</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-accent/5 rounded-lg">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                    <span className="text-xs font-medium">Enhanced power distribution</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-secondary/5 rounded-lg">
                    <div className="w-2 h-2 bg-secondary-foreground rounded-full"></div>
                    <span className="text-xs font-medium">Modern water supply systems</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-primary/5 to-transparent md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Car className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg">Transportation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  Well-connected transportation network including federal highways,
                  railways, and the Osogbo airport for regional connectivity.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-xs font-medium">Federal highway network</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-accent/5 rounded-lg">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                    <span className="text-xs font-medium">Railway connections</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-secondary/5 rounded-lg">
                    <div className="w-2 h-2 bg-secondary-foreground rounded-full"></div>
                    <span className="text-xs font-medium">Osogbo airport facilities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Infrastructure Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group cursor-pointer">
              <OsunImage
                query="Nigerian university campus"
                alt="Modern university campus in Nigeria"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium">University Campus</p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <OsunImage
                query="Nigerian school infrastructure"
                alt="Modern school infrastructure in Nigeria"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium">School Infrastructure</p>
              </div>
            </div>
            <div className="relative group cursor-pointer md:col-span-2 lg:col-span-1">
              <OsunImage
                query="Nigerian transportation network"
                alt="Transportation infrastructure in Nigeria"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium">Transport Network</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics - Enhanced Visual Cards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary-foreground hover:bg-secondary/20">Essential Data</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Statistics</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Essential metrics highlighting Osun State&apos;s development, scale, and potential for growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Population Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-transparent text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">4.7M</div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Population</p>
                <div className="text-xs text-primary/70">Growing Community</div>
              </CardContent>
            </Card>

            {/* LGAs Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-accent/5 to-transparent text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TreePine className="h-8 w-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-accent mb-2">30</div>
                <p className="text-sm font-medium text-muted-foreground mb-2">LGAs</p>
                <div className="text-xs text-accent-foreground/70">Administrative Divisions</div>
              </CardContent>
            </Card>

            {/* Area Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-transparent text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mountain className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">9,251</div>
                <p className="text-sm font-medium text-muted-foreground mb-2">km² Area</p>
                <div className="text-xs text-primary/70">Geographic Scale</div>
              </CardContent>
            </Card>

            {/* Established Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-accent/5 to-transparent text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="h-8 w-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-accent mb-2">1991</div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Established</p>
                <div className="text-xs text-accent-foreground/70">State Creation</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Notable Personalities - Enhanced Cards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Distinguished Contributors</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Notable Personalities</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Distinguished individuals who have shaped Osun State&apos;s development and Nigeria&apos;s progress through leadership, culture, and innovation
            </p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Political Leaders Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Political Leaders</CardTitle>
                <CardDescription className="text-base">
                  Visionary governors who shaped Osun State
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Isiaka Adeleke</h4>
                      <p className="text-xs text-muted-foreground">First Executive Governor</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Olagunsoye Oyinlola</h4>
                      <p className="text-xs text-muted-foreground">Former Governor</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary/5 rounded-lg">
                    <div className="w-2 h-2 bg-secondary-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Rauf Aregbesola</h4>
                      <p className="text-xs text-muted-foreground">Former Governor</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cultural Icons Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-accent/5 to-transparent">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent/15 to-accent/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Music className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-xl">Cultural Icons</CardTitle>
                <CardDescription className="text-base">
                  Guardians of Yoruba tradition and heritage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Traditional Rulers</h4>
                      <p className="text-xs text-muted-foreground">Obas and traditional leaders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Cultural Practitioners</h4>
                      <p className="text-xs text-muted-foreground">Artists and craftsmen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary/5 rounded-lg">
                    <div className="w-2 h-2 bg-secondary-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Festival Organizers</h4>
                      <p className="text-xs text-muted-foreground">Osun-Osogbo coordinators</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Excellence Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-primary/5 to-transparent md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Academic Excellence</CardTitle>
                <CardDescription className="text-base">
                  Intellectual leaders and educational pioneers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">University Scholars</h4>
                      <p className="text-xs text-muted-foreground">Professors and researchers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Education Administrators</h4>
                      <p className="text-xs text-muted-foreground">School and university leaders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary/5 rounded-lg">
                    <div className="w-2 h-2 bg-secondary-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Research Institutions</h4>
                      <p className="text-xs text-muted-foreground">Academic research centers</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Development Focus - Enhanced Cards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary-foreground hover:bg-secondary/20">Future Vision</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Current Development Focus</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Osun State continues to develop its infrastructure, education, and economic sectors
              while preserving its rich cultural heritage for sustainable progress
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Infrastructure Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-primary/5 to-transparent text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Infrastructure Development</CardTitle>
                <CardDescription className="text-base">
                  Modern urban planning and connectivity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Comprehensive road networks, sustainable housing solutions, and strategic urban planning initiatives
                  that enhance quality of life for all residents.
                </p>
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-accent/5 to-transparent text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-lg">Education Enhancement</CardTitle>
                <CardDescription className="text-base">
                  Quality learning for all ages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Upgrading educational facilities, improving learning outcomes, and expanding access to quality education
                  from primary through tertiary levels.
                </p>
              </CardContent>
            </Card>

            {/* Economic Growth Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-primary/5 to-transparent text-center md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Economic Growth</CardTitle>
                <CardDescription className="text-base">
                  Sustainable prosperity initiatives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Agricultural modernization, industrial development, and business-friendly policies that create jobs
                  and drive sustainable economic growth for all citizens.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Development Gallery */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group cursor-pointer">
              <OsunImage
                query="Nigerian infrastructure development"
                alt="Modern infrastructure development in Nigeria"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium">Infrastructure</p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <OsunImage
                query="Nigerian education innovation"
                alt="Educational innovation and learning in Nigeria"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium">Education</p>
              </div>
            </div>
            <div className="relative group cursor-pointer md:col-span-2 lg:col-span-1">
              <OsunImage
                query="Nigerian economic development"
                alt="Economic development and business growth in Nigeria"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium">Economic Growth</p>
              </div>
          </div>
        </div>
        </section>
      </div>
    </div>
    </div>
  );
}
