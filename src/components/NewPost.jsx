import foto from '../images/empresa.jpeg';
const NewPost = () => {
    return (
        <div>
            <div class="fixed top-4 right-4">
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <div class="inline-flex items-center px-3 py-2">
                            <img class="w-10 h-10 rounded-full mr-2" src={foto} alt="" />
                            <div class="font-medium dark:text-white">
                                <div>Jese Leos</div>
                            </div>
                        </div>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">You can create new post here</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Discover your next home with us.</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Create a new post
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default NewPost;