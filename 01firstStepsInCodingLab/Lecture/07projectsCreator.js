function projectsCreator(input){
    let name = (input[0]);
    let projectsNumber = (input[1]);
    let totalHours = 3 * projectsNumber

    console.log(`The architect ${name} will need ${totalHours} hours to complete ${projectsNumber} project/s.`)

}

projectsCreator(["George", "4"])