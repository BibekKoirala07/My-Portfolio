const PdfViewer = () => {
  return (
    <div>
      <iframe
        src="/myResume.pdf"
        width="100%"
        height="800px"
        title="PDF Viewer"
      />
    </div>
  );
};

export default PdfViewer;
