function YoutubeEmbed({ embedId }) {


  return (
    <div className="w-full max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">ODOS Summer Camp #Classof2025</h1>
      
      <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default YoutubeEmbed;

