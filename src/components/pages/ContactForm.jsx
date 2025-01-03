import {
  EmailRounded,
  Face6Rounded,
  SubjectRounded,
} from "@mui/icons-material";
import {
  Button,
  CardActions,
  InputAdornment,
  TextField,
  CardContent,
  Typography,
  Grid2,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useFormik } from "formik";
import { contactValidationSchema } from "../../validations/contactValidation";

import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const theme = useTheme();

  const contactInputName = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };

  const formik = useFormik({
    initialValues: contactInputName,
    onSubmit: (valuse) => {
      console.log("Form Value :", valuse);
    },
    validationSchema: contactValidationSchema,
  });
  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <CardContent>
        <Grid2 container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid2 size={{ xs: 12 }} sx={{ direction: "ltr" }}>
            <Grid2 container>
              <Grid2 size={{ xs: 12, md: 6 }} sx={{ p: 1 }}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="نام و نام خانوادگی"
                  name="fullname"
                  variant="outlined"
                  helperText={
                    formik.touched.fullname ? formik.errors.fullname : null
                  }
                  error={Boolean(
                    formik.touched.fullname && formik.errors.fullname
                  )}
                  value={formik.values?.fullname}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment postion="end">
                        <Face6Rounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }} sx={{ p: 1 }}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="آدرس ایمیل"
                  name="email"
                  variant="outlined"
                  helperText={formik.touched.email ? formik.errors.email : null}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment postion="end">
                        <EmailRounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 12 }} sx={{ p: 1 }}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="عنوان"
                  name="subject"
                  variant="outlined"
                  helperText={
                    formik.touched.subject ? formik.errors.subject : null
                  }
                  error={Boolean(
                    formik.touched.subject && formik.errors.subject
                  )}
                  value={formik.values?.subject}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment postion="end">
                        <SubjectRounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 12 }} sx={{ p: 1 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  size="small"
                  color="warning"
                  label="متن پیام"
                  name="message"
                  variant="outlined"
                  helperText={
                    formik.touched.message ? formik.errors.message : null
                  }
                  error={Boolean(
                    formik.touched.message && formik.errors.message
                  )}
                  value={formik.values?.message}
                  onChange={formik.handleChange}
                />
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </CardContent>
      <CardActions
        sx={{
          alignItems: "end",
          flexDirection: "column",
        }}
      >
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          theme={theme.palette.mode}
          hl="fa"
          onChange={(value) => {
            formik.setFieldValue("recaptcha", value);
          }}
        />
        {formik.errors.recaptcha && formik.touched.recaptcha && (
          <Typography variant="caption" color="error">
            {formik.errors.recaptcha}
          </Typography>
        )}
        <Button
          type="submit"
          color="success"
          variant="contained"
          sx={{ mt: 2 }}
          fullWidth
        >
          ارسال کن
        </Button>
      </CardActions>
    </form>
  );
};

export default ContactForm;
