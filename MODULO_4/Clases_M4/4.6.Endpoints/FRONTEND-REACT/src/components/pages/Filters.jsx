const Filters = ({ handleFilterAuthor, animes, selectAuthor }) => {
  const creators = [
    ...new Set(animes.map((anime) => anime.creadora).filter(Boolean)),
  ].sort();
  const handleChange = (ev) => {
    handleFilterAuthor(ev.target.value);
  };

  return (
    <form class="filters">
      <select name="creadora" value={selectAuthor} onChange={handleChange}>
        <option value="">Todas</option>
        {creators.map((creadora) => (
          <option key={creadora} value={creadora}>
            {creadora}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Filters;
