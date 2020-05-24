import Airtable from "airtable"

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyNmRNp3M2oIpnfF'
});

const base = Airtable.base('app4MqpvYJy5fPAhr')

export const authenticate = (userName, passwordInput) => {
    console.log("aqui",userName,passwordInput)
    let found = false
    base("Usuarios").select({
        filterByFormula: `{Usuario} = "${userName}"`
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
            console.log("aqui2")
            const password = record.get('password');
            const status = ''
            console.log("aqui3",password,userName,passwordInput)
            if (password === passwordInput) {
                if (status === 'Inactivo') {
                    found = true;
                    console.log('inactivo')
                }
                else {
                    found = true;
                    console.log('found')
                }
            }
            if (password !== passwordInput) {
                found = true;
                console.log('contrasena incorrecta')
            }
        });
        fetchNextPage();
    }, (err) => console.log(err))
}
export default authenticate