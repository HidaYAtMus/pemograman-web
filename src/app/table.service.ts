import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TableService{
    CourseService(): any[]{
        throw new Error("Method not implemented");
    }
    constructor(){}

    getMus(){
        return[
            {id:0, hobby: "Membaca buku", ket: "Membaca buku saat waktu senggang"},
            {id:1, hobby: "Bermain game", ket: "Bermain ketika saya sudah  jenuh memikirkan tugas"},
            {id:2, hobby: "Hanging out", ket: "Jalan-jalan ketika saya butuh piknik"}
        ]
    }
}