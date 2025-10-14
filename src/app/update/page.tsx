import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Updates() {
  const newsItems = [
    {
      title: "Campaign Launches Comprehensive Healthcare Initiative",
      date: "October 10, 2025",
      excerpt: "Our campaign today unveiled a bold plan to revolutionize healthcare access across Osun State, with commitments to build new hospitals and implement universal health coverage.",
      category: "Healthcare"
    },
    {
      title: "Education Summit Brings Together Stakeholders",
      date: "October 8, 2025",
      excerpt: "Education leaders, teachers, and parents gathered to discuss our comprehensive education reform plan aimed at providing quality education for all Osun State children.",
      category: "Education"
    },
    {
      title: "Campaign Receives Endorsement from Local Business Leaders",
      date: "October 5, 2025",
      excerpt: "Prominent business owners across Osun State have endorsed our economic development plan, citing its focus on job creation and business growth.",
      category: "Economy"
    },
    {
      title: "Youth Engagement Program Kicks Off in Osogbo",
      date: "October 3, 2025",
      excerpt: "Hundreds of young people participated in our youth engagement program, discussing opportunities for entrepreneurship and skill development.",
      category: "Youth"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4">Campaign Updates</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Latest Campaign Updates
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about our campaign activities, policy announcements,
            and progress toward building a better Osun State.
          </p>
        </div>

        <div className="grid gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{item.category}</Badge>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {item.excerpt}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for regular updates on campaign activities and policy announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border border-input rounded-md bg-background"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
