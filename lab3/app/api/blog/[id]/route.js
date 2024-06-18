export function GET(request, {params}){
    return Response.json({
        name:"Atsawin",
        major:"IT",
        lv:"3",
        id: params.id
    });
}