import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface MessageCardProps {
  title: string;
  message: string;
  icon: ReactNode;
  delay?: number;
}

export const MessageCard = ({ title, message, icon, delay = 0 }: MessageCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden bg-card/80 backdrop-blur-md border-primary/30 p-8 hover:scale-105 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-accent text-4xl animate-float">
            {icon}
          </div>
          <h3 className="text-2xl font-playfair font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {title}
          </h3>
        </div>
        
        <p className="text-foreground/90 leading-relaxed font-inter">
          {message}
        </p>
      </div>
      
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
    </Card>
  );
};
