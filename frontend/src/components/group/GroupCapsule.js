import React, { useState } from 'react'
import {
    Typography,
    MobileStepper,
    Button,
    useTheme,
    Paper,
  } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { CenterFocusStrong, KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
function GroupCapsule() {
  const theme = useTheme();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const [openCapsule, setOpenCapsule] = useState([
    {
      label: "첫번째 캡슐",
      imgPath: "https://i.ytimg.com/vi/Lihd4NYzU0A/hqdefault.jpg",
    },
    {
      label: "두번째 캡슐",
      imgPath: "https://pbs.twimg.com/media/DKyeGamV4AAfAUl.jpg",
    },
  ]);
  const [nonOpenCapsule, setNonOpenCapsule] = useState([]);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
    return (
        <>
      <Paper
        square
        elevation={0}
        className={{
          display: "flex",
          alignItems: "center",
          height: 50,
          paddingLeft: theme.spacing(4),
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography style={{textAlign:"center"}}>{openCapsule[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {openCapsule.map((step, index) => (
          <div style={{textAlign:"center"}}key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={{
                  // height: "100px",
                  display: "block",
                  overflow: "hidden",
                }}
                style={{height:"100px"}}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        steps={2}
        position="static"
        activeStep={activeStep}
        className={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 1}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </>
    )
}

export default GroupCapsule
