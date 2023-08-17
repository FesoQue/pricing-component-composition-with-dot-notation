import React from "react";
import { cn } from "../lib/utils";
import check_circle from "../assets/check-circle.svg";

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
    <div className={cn("flex items-end gap-[10px] mb-6", className)} {...rest}>
      <h2 className="text-[#231D4F] text-3xl font-semibold">{children}</h2>
      <span className="text-[#848199]">/month</span>
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
    <div className={cn("flex items-center gap-2 mb-5", className)} {...rest}>
      <img src={check_circle} alt="check circle" />
      <p className="text-[#848199]">{children}</p>
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
