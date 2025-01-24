import { forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";

export const LinkBehavior = forwardRef<
  never,
  Omit<LinkProps, "to"> & { href?: string }
>((props, ref) => {
  return <Link ref={ref} to={props.href ?? ""} {...props} />;
});

export default LinkBehavior;
