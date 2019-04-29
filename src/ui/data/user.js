import {configuration} from '../../../config/configuration';
import {actions as userActions, select as userSelect} from '../stores/user';
import axios from 'axios';
import Swal from 'sweetalert2';

async function createUser(user) {
    // const passwordHash = createPassword(user.password, 10);
    // const values = [
    //     user.name,
    //     user.email,
    //     passwordHash,
    //     user.identifier,
    //     user.admin_privilege,
    //     user.supervisor_privilege,
    //     user.approved,
    //     user.suspend_reason,
    //     user.suspend_duration,
    //     user.ip_address
    // ];
    //
    // const insertQuery =
    //     'INSERT INTO `users` (name, email, password, identifier, admin_privilege, supervisor_privilege, approved, suspend_reason, suspend_duration, ip_address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    //
    // const qry = await mysqlQuery(insertQuery, values);
}

export async function validateLogin(email, password) {
    const server = configuration[process.env.NODE_ENV].serverHost;
    userActions.startLoading();

    try {
        const user = await axios.post(`${server}/user/validate`, {email, password});

        userActions.finishLoading(user.data[0]);

        const successMessage = {
            title: 'Welcome to the CAD/MDT!',
            text: 'You have successfully authenticated. Please select the appropriate system.'
        };

        Swal.fire(errorMessage);

        return true;
    } catch (error) {
        const errorMessage = {
            title: 'Login Problems',
            text: 'Your login was incorrect. Please try again or contact an administrator.',
            type: 'error'
        };

        Swal.fire(errorMessage);

        return false;
    }
}
