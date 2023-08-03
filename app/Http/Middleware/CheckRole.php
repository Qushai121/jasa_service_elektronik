<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
        $roles = [
            'user_biasa' => [1],
            'admin' => [2],
            'data_entry' => [3],
            'pekerja' => [4],
            'all_staff' => [2,3,4],
            'admin__data_entry' => [2,3],
        ];
        if (!in_array(auth()->user()->role_id, $roles[$role])) {
            abort(401);
        };
        return $next($request);
    }
}
