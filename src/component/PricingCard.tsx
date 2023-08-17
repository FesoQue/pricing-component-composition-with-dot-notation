import React from "react";
import { cn } from "../lib/utils";

interface PricingCardProps {
  children: React.ReactNode;
  className?: string;
}

export const PricingCard = ({
  children,
  className,
  ...rest
}: PricingCardProps) => {
  return (
    <section className={cn(className)} {...rest}>
      {children}
    </section>
  );
};
PricingCard.Body = function PricingCardBody({
  children,
  className,
  ...rest
}: PricingCardProps) {
  return (
    <article className={cn(className)} {...rest}>
      {children}
    </article>
  );
};
PricingCard.Header = function PricingCardHeader({
  children,
  className,
  ...rest
}: PricingCardProps) {
  return (
    <div className={cn(className)} {...rest}>
      {children}
    </div>
  );
};
PricingCard.Cost = function PricingCardCost({
  children,
  className,
  ...rest
}: PricingCardProps) {
  return (
    <div className={cn(className)} {...rest}>
      {children}
    </div>
  );
};
PricingCard.Text = function PricingCardText({
  children,
  className,
  ...rest
}: PricingCardProps) {
  return (
    <h2 className={cn(className)} {...rest}>
      {children}
    </h2>
  );
};

PricingCard.Value = function PricingCardValue({
  children,
  className,
  ...rest
}: PricingCardProps) {
  return (
    <div className={cn(className)} {...rest}>
      {children}
    </div>
  );
};
PricingCard.Button = function PricingCardButton({
  children,
  className,
  ...rest
}: PricingCardProps) {
  return (
    <button className={cn(className)} {...rest}>
      {children}
    </button>
  );
};
