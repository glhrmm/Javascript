const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
    name: "Costas",
    address: {
    street: "Lalaland 12"  
}};
   
// #1 //

const getCompanies = () => 
    companies.forEach((company) =>
    console.log(
        `O nome desta empresa é ${company.name} e foi fundada em ${company.start}.`
    )
);  

// #2 //

const newCompanies = (start = 1987) => companies.filter((company) => company.start > start);

console.log((newCompanies()));

// #3 //

const soma = ages.reduce((accumulator, age) => accumulator + age, 0);

console.log(soma);

// #4 //

