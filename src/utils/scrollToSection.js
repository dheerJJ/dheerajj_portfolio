export const scrollToSection = (targetId, updateHistory = true) => {
  if (typeof window === 'undefined') return;

  const cleanId = (targetId || '').replace(/^[/#]+/, '').toLowerCase();

  if (!cleanId || cleanId === 'home' || cleanId === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (updateHistory) {
      window.history.pushState(null, '', '/');
    }
  } else {
    const element = document.getElementById(cleanId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (updateHistory) {
      window.history.pushState(null, '', `/${cleanId}`);
    }
  }
};

