import { cva } from "class-variance-authority"
import { cn } from "../../../utils/cn"
import PropTypes from "prop-types"

const ButtonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-blue/30 gap-2 whitespace-nowrap',
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        tertiary: "",
        destructive: ""
      },
      size: {
        default: '',
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

const Button = ({ className, variant, size, ...props }) => {
  return <button className={cn(ButtonVariants({ variant, size, className }))} {...props} />;
};

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'destructive']),
  size: PropTypes.oneOf(['default', 'sm', 'md', 'lg']),
};

export default Button;