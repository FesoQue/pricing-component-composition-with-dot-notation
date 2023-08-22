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
    <article className={cn(className)} {...rest}>
      {children}
    </article>
  );
};
PricingCard.Body = function PricingCardBody({
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
PricingCard.Plan = function PricingCardPlan({
  children,
  className,
  ...rest
}: PricingCardProps) {
  return (
    <span className={cn(className)} {...rest}>
      {children}
    </span>
  );
};
PricingCard.Cost = function PricingCardCost({
  children,
  className,
  ...rest
}: PricingCardProps) {
  return (
    <div className={cn("flex items-end gap-[10px] mb-6", className)} {...rest}>
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
    <p className={cn(className)} {...rest}>
      {children}
    </p>
  );
};
PricingCard.Value = function PricingCardValue({
  children,
  className,
  ...rest
}: PricingCardProps) {
  return (
    <div className={cn("flex items-center gap-2 mb-5", className)} {...rest}>
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
