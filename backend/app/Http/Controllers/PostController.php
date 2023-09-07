<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::all();
        return response()->json(["posts" => $posts], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $users = User::all();
        return response()->json(["users" => $users], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // return response()->json($request->all());
        // dd($request->all());
        // $user = User::pluck('id')->toArray();
        // $post = Post::create([
        //     "title" => $request->title,
        //     "content" => $request->content,
        //     "slug" => $request->slug,
        //     "user_id" => $request->user,
        // ]);
        $post = new Post;
        $post->title = $request->title;
        $post->content = $request->content;
        $post->slug = $request->slug;
        $post->user_id = $request->user;
        $post->save();

        return response()->json(["post" => $post, "message" => "successfully created"], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $post = Post::find($id);
        return response()->json(["post" => $post], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // dd($request);
        $post = Post::find($id);
        $post->update($request->all());
        // $post->title = $request->title;
        // $post->content = $request->content;
        // $post->slug = $request->slug;
        // $post->user_id = $request->user_id;
        return response()->json(["post" => $post, "message" => "successfully updated"], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Post::destroy($id);
        return response()->json(["message" => "successfully deleted"], 200);
    }
}
