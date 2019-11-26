import { sendUserConfirmationEmail } from './user.controller';
import schema from './user.schema';

function userRoutes(server) {
  server.post('/user/confirmation', { schema }, sendUserConfirmationEmail);
}

export default userRoutes;
