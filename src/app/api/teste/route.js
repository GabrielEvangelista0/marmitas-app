export async function GET(request){
    const ola = {
        ola: 'ola'
    }
    return new Response(JSON.stringify(ola))
}