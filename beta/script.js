    let clickCount = 0;
    let visitorCount = Math.floor(Math.random() * 40) + 1;
    let announcementCount = 0;
    let timer;

    setTimeout(() => {
      document.getElementById('loading').style.display = 'none';
    }, 4000);

    function postComment() {
      const val = document.getElementById("commentInput").value;
      if (val.trim()) {
        const entry = document.createElement("div");
        entry.className = "comment-entry";
        entry.textContent = val;
        document.getElementById("commentFeed").prepend(entry);
        document.getElementById("commentInput").value = "";

        // Send email
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
          message: val,
        });

        // Auto-remove
        setTimeout(() => entry.remove(), 21000);
      }
    }

    function promptComment() {
      clickCount++;
      document.getElementById('clickCount').textContent = clickCount;
      setTimeout(() => {
        document.getElementById("commentInput").focus();
      }, 1000);
    }

    document.addEventListener('keydown', e => {
  keys[e.key] = true;
  if (keys['Control'] && keys[' ']) {
    timer = setTimeout(() => {
      document.getElementById('adminLogin').style.display = 'block';
    }, 2000);
  }
});
    document.addEventListener('keyup', e => {
      keys[e.key] = false;
      clearTimeout(timer);
    });

    function submitAdminLogin() {
      const email = document.getElementById('adminEmail').value;
      const pass = document.getElementById('adminPassword').value;
      if (email === 'lumoratech6@gmail.com' && pass === 'lumoratechnologies@gitcompanies') {
        document.getElementById('adminLogin').style.display = 'none';
        document.getElementById('adminDashboard').style.display = 'block';
        document.getElementById('visitorCount').textContent = visitorCount;
      } else {
        alert('Access Denied');
      }
    }

    function postAnnouncement() {
      const val = document.getElementById('newAnnouncement').value;
      if(val.trim()) {
        document.getElementById('announcement').textContent = val;
        announcementCount++;
        document.getElementById('announcementCount').textContent = announcementCount;
        document.getElementById('newAnnouncement').value = '';
      }
    }

    function logoutAdmin() {
      document.getElementById('adminDashboard').style.display = 'none';
    }
