import { cx } from "class-variance-authority";

const Container = ({ children, className, variant }) => {
  return (
    <>
      {variant === "flexCenter" && (
        <div className={cx("flex items-center justify-center", className)}>
          {" "}
          {children}{" "}
        </div>
      )}
      {variant === "flexCols" && (
        <div className={cx("flex flex-col", className)}>
          {" "}
          {children}{" "}
        </div>
      )}
      {variant === "flexColsCenter" && (
        <div className={cx("flex flex-col items-center justify-center", className)}>
          {" "}
          {children}{" "}
        </div>
      )}
      {variant === "flexBetween" && (
        <div className={cx("flex items-center justify-between", className)}>
          {" "}
          {children}{" "}
        </div>
      )}
      {variant === "gridCols2" && (
        <div className={cx(" grid grid-cols-2 justify-between", className)}>
          {" "}
          {children}{" "}
        </div>
      )}
      {variant === "gridCols4" && (
        <div className={cx("grid grid-cols-4 justify-between", className)}>
          {" "}
          {children}{" "}
        </div>
      )}
    </>
  );
};

export default Container;
