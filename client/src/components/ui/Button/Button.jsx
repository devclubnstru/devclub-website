import PropTypes from "prop-types"
import { cva } from "class-variance-authority"
import { cn } from "../../../utils/cn" // Adjust the path if needed

const buttonVariants = cva(
    "inline-flex items-center justify-center font-body cursor-pointer transition-colors duration-250 rounded-full",
    {
        variants: {
            variant: {
                default:
                    "bg-background-dark-base text-text-dark dark:bg-background-light-base dark:text-text-light dark:hover:bg-background-light-1hover:bg-background-dark-1 dark:hover:bg-gray-300 hover:bg-gray-800 transition-all duration-300",
                outline:
                    "border border-black dark:border-white bg-background-light-base dark:bg-background-dark-base hover:bg-background-dark-base hover:text-text-dark dark:hover:bg-background-light-base dark:hover:text-text-light",
            },
            size: {
                sm: "px-3 py-2 text-sm",
                md: "px-6 py-3 text-base",
                lg: "px-8 py-3 text-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
)

function Button({ className, variant = "default", size = "md", children, ...props }) {
    return (
        <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(["default", "outline"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    children: PropTypes.node,
}

export default Button