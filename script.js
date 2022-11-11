let user = prompt( 'ismini kirit irkit' )
let y = run(1000,9999)
let pasword = prompt( 'qatasa xozi laycha ' + y)


pasword  == y ? alert('latalar oilasiga xush kelipsiz') : alert('xato')



function run(max, min){
    return Math.floor(Math.random() * (max - min +1) + min )
}


















