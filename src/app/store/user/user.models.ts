export { User, Recruiter, Employee } from '../../models/backend/user';

// Request Models

export interface EmailPasswordCredentials {
  email: string;
  password: string;
}
