export const useTemplate = () => {
    let template = {
        meno: "",
        priezvisko: "",
        mail: "",
        sprava: "",
    }
    let errory = {
        meno: 2,
        priezvisko: 2,
        mail: 2,
        sprava: 2,
    }
    let templaty = { template, errory }
    console.log(templaty)
    return templaty
}