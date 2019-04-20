<?php

namespace App\Http\Middleware;

use Closure;
use Symfony\Component\HttpFoundation\RedirectResponse;

class ConvertRedirects
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        if ($response instanceof RedirectResponse) {
            $response->setStatusCode(303);
        }

         return $response;
    }
}
