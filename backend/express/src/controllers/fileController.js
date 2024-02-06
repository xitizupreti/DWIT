export let uploadSingleFile = (req, res, next) => {
  try {
    console.log(req.file);
    res.json({
      success: true,
      message: "Single File uploaded successfully.",
      link: `http://localhost:8000/${req.file.filename}`,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let uploadMultipleFile = (req, res, next) => {
  try {
    // console.log(req.files);
    let link = req.files.map((value, i) => {
      return `http://localhost:8000/${value.filename}`;
    });
    res.json({
      success: true,
      message: "Multiple File uploaded successfully.",
      link: link,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
