<?php

namespace App\Exceptions;

use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;

trait ShowsErrorPageUsingInertia
{
    /**
     * Render the given HttpException.
     *
     * @param  \Symfony\Component\HttpKernel\Exception\HttpExceptionInterface  $e
     * @return \Symfony\Component\HttpFoundation\Response
     */
    protected function renderHttpException(HttpExceptionInterface $e)
    {
        $statusCode = $e->getStatusCode();

        $inertiaResponse = Inertia::render('Error', [
            'code' => $statusCode,
            'message' => $this->responseStatusText($statusCode),
        ]);

        if (! $inertiaResponse instanceof Response) {
            return new Response($inertiaResponse, $statusCode);
        }

        return $inertiaResponse;
    }

    /**
     * Get the status text based on status code.
     *
     * @param  int  $statusCode
     * @return string
     */
    private function responseStatusText($statusCode)
    {
        if ($statusCode === 419) {
            return 'Page Expired';
        }

        return Response::$statusTexts[$statusCode] ?? 'Unknown Error';
    }
}
