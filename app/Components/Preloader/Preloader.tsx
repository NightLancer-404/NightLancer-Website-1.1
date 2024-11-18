export default function Preloader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="loader"></div>
            {/* Replace the above div with your preferred preloader animation */}
        </div>
    );
}