---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
.pdf-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 141.4%; /* A4 ratio (1:1.414) */
  margin: 20px 0;
}

.pdf-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
}

.pdf-download {
  text-align: center;
  margin: 20px 0;
}

.pdf-download a {
  display: inline-block;
  padding: 10px 20px;
  background-color: #52adc8;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.pdf-download a:hover {
  background-color: #3d8aa3;
}

@media (max-width: 768px) {
  .pdf-container {
    padding-bottom: 200%; /* Taller ratio for mobile */
  }
}
</style>

<div class="pdf-container">
  <iframe src="{{ base_path }}/files/cv.pdf" type="application/pdf">
    <p>Your browser does not support PDFs. Please <a href="{{ base_path }}/files/cv.pdf">download the PDF</a> to view it.</p>
  </iframe>
</div>

<div class="pdf-download">
  <a href="{{ base_path }}/files/cv.pdf" download>📥 Download CV (PDF)</a>
  <a href="{{ base_path }}/files/cv.pdf" target="_blank">🔗 Open in New Tab</a>
</div>
