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
PricingCard.Plan = function PricingCardPlan({
  children,
  className,
  ...rest
}: PricingCardProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-[#d445a0] bg-[#fa80cd] mb-5 font-semibold rounded-full bg-opacity-20",
        className
      )}
      {...rest}
    >
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
    <p className={cn("text-[#848199] mb-5", className)} {...rest}>
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
    <button
      className={cn(
        "w-full h-[45px] mt-5 text-center text-[#d445a0] bg-[#F496D1] bg-opacity-20 font-semibold rounded-full",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
