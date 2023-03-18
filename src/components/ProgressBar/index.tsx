import { Progress, ProgressProps, useStyleConfig } from "@chakra-ui/react";

type StyledProgressProps = ProgressProps & {
  value: number;
};

const StyledProgress = ({ value, ...props }: StyledProgressProps) => {
  const { colorScheme } = useStyleConfig("Progress", { colorScheme: "red" });

  const progressBarStyles = {
    bg: "blue",
    borderRadius: "full",
    w: "200px",
    h: "40px",
  };

  const progressStyles = {
    bg: `${colorScheme}.500`,
    borderRadius: "full",
    transition: "all 0.2s",
  };

  const currentProgress = value > 100 ? 100 : value;

  return (
    <Progress
      {...props}
      value={currentProgress}
      sx={progressBarStyles}
      sxFilled={progressStyles}
    />
  );
};

export default StyledProgress