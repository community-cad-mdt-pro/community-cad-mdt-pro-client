import {configuration} from '../../../config/configuration';
import {actions as userActions, select as userSelect} from '../stores/user';
import axios from 'axios';

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

    const user = await axios.post(`${server}/user/validate`, {email, password});

    if (!user) {
        return false;
    }

    userActions.finishLoading(user.data[0]);
    return true;
}
