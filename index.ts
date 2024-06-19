import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    //Prisma Quries

    //create user
    // const user = await prisma.user.create({
    //     data:{
    //         name: 'jhon doe',
    //         email:'xyz@gmail.com',
    //     }
    // })
    // console.log(user);


    //GetALL Users
    // const users = await prisma.user.findMany({
    //     include:{
    //         articles: true
    //     }
    // });
    // console.log(users);
    

    //Create articles and associate with User
    // const article = await prisma.article.create({
    //     data:{
    //         title: 'jhones First article',
    //         body: 'This is jhones fist articles',
    //         author:{
    //             connect:{
    //                 id:1
    //             }
    //         }
    //     }
    // })
    // console.log(article);


    // GetAll Articles
    // const artilces = await prisma.article.findMany();
    // console.log(artilces);
    

    //Create USer and Articles and aasociate them at oine time

    // const user = await prisma.user.create({
    //     data:{
    //         name: 'sandy',
    //         email: 'sandy@gamil',
    //         articles: {
    //             create: {
    //                 title: 'this is sandys artikle',
    //                 body: 'This is sandyes frst articles'
    //              }
    //         }
    //     }
    // })
    // console.log(user);

    //create another articles
    // const article = await prisma.article.create({
    //     data:{
    //         title: 'sample artilce',
    //         body: 'this is sample',
    //         author: {
    //             connect: {
    //                 id:2
    //             }
    //         }
    //     }
    // })
    // console.log(article);

    //loop over sandys article
    // users.forEach((user) => {
    //     console.log(`User: ${user.name}, Email: ${user.email}`);
    //     console.log('Articles:');
    //     user.articles.forEach((article) => {
    //         console.log(`-Title: ${article.title}, Body: ${article.body}`);
    //     })
    //     console.log('\n');
    // })
    
    //Update data
    // const user = await prisma.user.update({
    //     where:{
    //         id:1
    //     },
    //     data:{
    //         name:"Jhon doe JR"
    //     }
    // })
    // console.log(user);
    
    //Remove data
    // const article = await prisma.article.delete({
    //     where:{
    //         id:2
    //     }
    // })
    // console.log(article);

    //To open Prisma GUI run command -> npx prisma studio

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
    
  })