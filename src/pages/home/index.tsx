function Home() {

	const handleFetch = () => {
    fetch(window.location.href).then((res) => {
      return res.text();
    }).then((res) => {
      console.log("请求结果", res);
    })
	}

	const buttonCls =
    "bg-white border border-solid border-[#d9d9d9] py-1 px-4 rounded-md text-sm hover:text-blue-500 cursor-pointer hover:border-blue-500 transition-all";

  return (
    <>
      <div className="m-3">
        <button className={buttonCls} onClick={() => handleFetch()}>
          点击请求
        </button>
      </div>
      <div className="m-3">
        <button className={buttonCls}>
          <a href="/react19-play/about">路由切换</a>
        </button>
      </div>
      <div className="m-3">
        <button className={buttonCls}>
          <a href="/react19-play/antd-demo">AntD Demo</a>
        </button>
      </div>
    </>
  );
}

export default Home;
