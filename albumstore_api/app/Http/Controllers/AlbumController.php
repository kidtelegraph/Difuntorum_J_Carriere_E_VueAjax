<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Album;


class AlbumController extends Controller {
    /**
     *
     * @return void    
     */

     public function getAll() {
         $albums = Album::all();
         return response()->json($albums);
     }

     public function getOne($id) {
         $album = Album::find($id);
         return response()->json($album);
     }

     public function save(Request $request) {
        $this->validate($request, [
            'title' => 'required',
            'artist_id' => 'required',
            'published_date' => 'required|date',
            'album_image' => 'required'
        ]);
        $album = Album::create($request->all());
        return response()->json($album, 201);
    }



    public function update(Request $request, $id) {
        $album = Album::findOrFail($id);

        $this->validate($request, [
            'title' => 'required',
            'artist_id' => 'required',
            'published_date' => 'required|date',
            'album_image' => 'required'
        ]);
        $album->update($request->all());
        return response()->json($album);
    }


    public function delete($id) {
        $album = Album::findOrFail($id);
        $album->delete();
        return response()->json(null, 204);
    }


 

}