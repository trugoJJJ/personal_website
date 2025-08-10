import { Button } from "@/components/ui/button";
import { Mail, Calendar, MessageCircle, ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero animate-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main CTA */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Gotowy na 
              <span className="block text-gradient-accent">następny level?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Sprawdźmy razem, jak mogę pomóc Twojemu biznesowi osiągnąć ambitne cele marketingowe. 
              Bezpłatna konsultacja to pierwszy krok do sukcesu.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{animationDelay: "0.3s"}}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-hero group"
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Umów bezpłatną konsultację
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-6 text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Napisz wiadomość
            </Button>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up" style={{animationDelay: "0.6s"}}>
            
            {/* Email */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover-scale">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-white/80 text-sm mb-4">
                Odpowiadam zwykle w ciągu 24h
              </p>
              <a 
                href="mailto:hello@marketingwizard.pl" 
                className="text-white hover:text-white/80 font-medium text-sm"
              >
                hello@marketingwizard.pl
              </a>
            </div>

            {/* LinkedIn */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover-scale">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-white/80 text-sm mb-4">
                Połączmy się i porozmawiajmy
              </p>
              <a 
                href="#" 
                className="text-white hover:text-white/80 font-medium text-sm"
              >
                /in/marketingwizard
              </a>
            </div>

            {/* Calendar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover-scale">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Calendly</h3>
              <p className="text-white/80 text-sm mb-4">
                Wybierz dogodny termin
              </p>
              <a 
                href="#" 
                className="text-white hover:text-white/80 font-medium text-sm"
              >
                Zarezerwuj spotkanie
              </a>
            </div>
          </div>

          {/* Final note */}
          <div className="mt-16 animate-fade-in-up" style={{animationDelay: "0.9s"}}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-white/90 text-lg leading-relaxed">
                💡 <strong>Współpraca ze mną to:</strong> transparentność, regularne reporty, 
                focus na ROI i partnerskie podejście do Twojego biznesu.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-float" style={{animationDelay: "3s"}}></div>
      </div>
    </section>
  );
};