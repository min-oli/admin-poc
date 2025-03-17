// material-ui
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

export default function AuthFooter() {
  return (
    <Container maxWidth="xl">
      <Stack direction="column" justifyContent="center" alignItems="center" textAlign="center">
        <Stack alignItems="center" textAlign="center">
          <Typography variant="body2" color="secondary">
            This system can only be used by Olive Young executives and employees and may be punished by relevant laws and regulations for
            illegal access and use.
          </Typography>
        </Stack>

        <Stack alignItems="center" textAlign="center">
          <Typography variant="body2" color="secondary">
            Copyright ⓒ 2025 CJ OLIVE YOUNG. All rights reserved.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
