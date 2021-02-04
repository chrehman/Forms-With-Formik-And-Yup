import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Address from '../components/Address';
import Card from '../components/Card'
import Review from '../components/Review';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Address Details', 'Debit Card Details', 'Review'];
}

function getStepContent(stepIndex, setActiveStep, formValues, setFormValues) {
    switch (stepIndex) {
        case 0:
            return <Address setActiveStep={setActiveStep} setFormValues={setFormValues} prevValues={formValues} formValues={formValues} />
        case 1:
            return <Card setActiveStep={setActiveStep} setFormValues={setFormValues} prevValues={formValues} formValues={formValues} />
        case 2:
            return <Review setActiveStep={setActiveStep} Values={formValues} setFormValues={setFormValues} />
        default:
            return 'Unknown stepIndex';
    }
}

export default function HorizontalStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [formValues, setFormValues] = React.useState({});

    const steps = getSteps();


    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {getStepContent(activeStep, setActiveStep, formValues, setFormValues)}
        </div>
    );
}
