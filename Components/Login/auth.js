import {Airtable} from "airtable"
const verifyUser=()=>{

    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'keyNmRNp3M2oIpnfF'}).base('app4MqpvYJy5fPAhr');
    // base('Usuarios').find('recBE7IEqUY9gaTCl', function(err, record) {
    //     if (err) { console.error(err); return; }
    //     console.log('Retrieved', record);
    // });
    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: 'keyD5lG9mCvgYDBUX'
    });
    // const base = Airtable.base('appyoqS2nC185S6HQ');
    const base = Airtable.base('appqBBlWTvjF83U1J');
    export const authenticate = (userName, passwordInput) => {
        // gotta do searh using username
        // return user not found if not username
        // work on reducers to fix object
        // if pending, show loading icon
        let found = false;
        return (dispatch) => {
            dispatch({ type: "getting_data", status: "pending" })
            base('USERS').select({
          filterByFormula: `{usuario} = "${userName}"`
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                const password =  record.get('password');
                    if(password === passwordInput){
                        const linkEmbarque =  record.get('linkEmbarque');
                        const nombreUsuario = record.get('fullName');
                        const usuario = record.get('usuario');
                        const linkNewEmbarque =  record.get('linkNewEmbarque');
                        const userType = record.get('userType');
                        const status = record.get('status');
                        if(status === 'Inactivo'){
                            found = true;
                            dispatch({
                                type: AUTH_USER,
                                error: 'El usuario esta inactivo'
                            })
                        }
                        else{
                            found = true;
                            dispatch( {
                                type: AUTH_USER,
                                payload: {
                                    usuario: usuario,
                                linkEmbarque: linkEmbarque,
                                fullName: nombreUsuario,
                                linkNewEmbarque: linkNewEmbarque,
                                userType: userType,
                                }
                            } )
                        }
                    }
                    if(password !== passwordInput){
                        found = true;
                        dispatch({
                            type: AUTH_USER,
                            error: 'Contrasena incorrecta'
                        })
                    }
            });
            fetchNextPage();
        }, function done(err) {
            if(!found){
                dispatch({
                    type: AUTH_USER,
                    error: 'usuario no registrado',
                })
            }
            if (err) { console.error(err); return { error: 'Problema con la base de datos'}; }
        })
        }
    };
    // const getData = async (userName, pass) => {
    // 	await base('Usuarios').select({
    // 		filterByFormula: `{password} = "${pass}"`
    // }).eachPage(function page(records, fetchNextPage) {
    // 	records.forEach(function(record) {
    // 		const usuario =  record.get('usuario');
    // 			if(usuario === userName){
    // 				const linkEmbarque =  record.get('linkEmbarque');
    // 				const nombreUsuario = record.get('fullName');
    // 				const status = record.get('status');
    // 				if(status === 'Inactivo'){
    // 					return{
    // 						error: 'El usuario esta inactivo'
    // 					}
    // 				}
    // 				else{
    // 					return {
    // 						usuario: usuario,
    // 						linkEmbarque: linkEmbarque,
    // 						fullName: nombreUsuario,
    // 					} 
    // 				}
    // 			}
    // 			else{
    // 				return {
    // 					error: 'Contrasena o usuario no registrado'
    // 				}
    // 			}
    // 	});
    // 	fetchNextPage();
    // }, function done(err) {
    // 	if (err) { console.error(err); return { error: 'Problema con la base de datos'}; }
    // })
    // }

}    
export default verifyUser