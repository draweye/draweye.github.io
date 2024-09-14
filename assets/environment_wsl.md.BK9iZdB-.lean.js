import{_ as a,c as i,a0 as n,o as e}from"./chunks/framework.CSWVnUiV.js";const o=JSON.parse('{"title":"WSL","description":"","frontmatter":{},"headers":[],"relativePath":"environment/wsl.md","filePath":"zh/environment/wsl.md","lastUpdated":null}'),l={name:"environment/wsl.md"};function p(t,s,r,h,d,c){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="wsl" tabindex="-1">WSL <a class="header-anchor" href="#wsl" aria-label="Permalink to &quot;WSL&quot;">​</a></h1><p>适用于 Linux 的 Windows 子系统</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>在管理员模式下打开 PowerShell 或 Windows 命令提示符</p><p><strong>将WSL更新到最新版本</strong></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-f2rWa" id="tab-XGmB8uR" checked><label for="tab-XGmB8uR">PowerShell</label></div><div class="blocks"><div class="language-PowerShell vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">PowerShell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">update</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set-default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">version </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div></div><p><strong>查看可用的WSL发行版</strong></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-QTLm-" id="tab--Q7ugB8" checked><label for="tab--Q7ugB8">PowerShell</label></div><div class="blocks"><div class="language-PowerShell vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">PowerShell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">online</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><div class="info custom-block"><p class="custom-block-title">输出示例</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>以下是可安装的有效分发的列表。</span></span>
<span class="line"><span>使用 &#39;wsl.exe --install &lt;Distro&gt;&#39; 安装。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NAME                            FRIENDLY NAME</span></span>
<span class="line"><span>Ubuntu                          Ubuntu</span></span>
<span class="line"><span>Debian                          Debian GNU/Linux</span></span>
<span class="line"><span>kali-linux                      Kali Linux Rolling</span></span>
<span class="line"><span>Ubuntu-18.04                    Ubuntu 18.04 LTS</span></span>
<span class="line"><span>Ubuntu-20.04                    Ubuntu 20.04 LTS</span></span>
<span class="line"><span>Ubuntu-22.04                    Ubuntu 22.04 LTS</span></span>
<span class="line"><span>Ubuntu-24.04                    Ubuntu 24.04 LTS</span></span>
<span class="line"><span>OracleLinux_7_9                 Oracle Linux 7.9</span></span>
<span class="line"><span>OracleLinux_8_7                 Oracle Linux 8.7</span></span>
<span class="line"><span>OracleLinux_9_1                 Oracle Linux 9.1</span></span>
<span class="line"><span>openSUSE-Leap-15.6              openSUSE Leap 15.6</span></span>
<span class="line"><span>SUSE-Linux-Enterprise-15-SP5    SUSE Linux Enterprise 15 SP5</span></span>
<span class="line"><span>SUSE-Linux-Enterprise-15-SP6    SUSE Linux Enterprise 15 SP6</span></span>
<span class="line"><span>openSUSE-Tumbleweed             openSUSE Tumbleweed</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></div><p><strong>安装Ubuntu</strong></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-uxHbQ" id="tab-cV3u1Cg" checked><label for="tab-cV3u1Cg">PowerShell</label></div><div class="blocks"><div class="language-PowerShell vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">PowerShell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">install </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d Ubuntu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24.04</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><h2 id="更改存储位置-可选" tabindex="-1">更改存储位置（可选） <a class="header-anchor" href="#更改存储位置-可选" aria-label="Permalink to &quot;更改存储位置（可选）&quot;">​</a></h2><p>WSL默认安装到系统盘，可以通过导出/导入的方式更改</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Nfj_g" id="tab--tSUbJM" checked><label for="tab--tSUbJM">PowerShell</label></div><div class="blocks"><div class="language-PowerShell vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">PowerShell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export Ubuntu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24.04</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EXPORT_PATH\\Ubuntu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24.04</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.tar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">unregister Ubuntu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24.04</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import Ubuntu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24.04</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TARGET_PATH\\Ubuntu2404 EXPORT_PATH\\Ubuntu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24.04</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.tar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">setdefault Ubuntu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24.04</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set-default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user YOUR_NAME Ubuntu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24.04</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>将EXPORT_PATH替换为实际导出的路径。例如D:\\WSL\\Export<br> 将TARGET_PATH替换为实际要存放WSL相关文件的路径。例如D:\\WSL\\Data<br> 将YOUR_NAME替换为自己的账户名。例如ZhangSan</p></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><h3 id="全局配置" tabindex="-1">全局配置 <a class="header-anchor" href="#全局配置" aria-label="Permalink to &quot;全局配置&quot;">​</a></h3><p>修改全局设置，启用镜像网络模式（仅Windows11支持）。<br> 默认情况下，.wslconfig 文件不存在。 它必须创建并存储在%UserProfile%目录中才能应用这些配置设置。</p><p><strong>.wslconfig文件内容</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[wsl2]</span></span>
<span class="line"><span>networkingMode=mirrored</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="本地设置" tabindex="-1">本地设置 <a class="header-anchor" href="#本地设置" aria-label="Permalink to &quot;本地设置&quot;">​</a></h3><p>修改本地设置，启用systemd 支持。<br> 作为 unix 文件存储在发行版的 /etc 目录中，该目录路径应类似于：/etc/wsl.conf。</p><p><strong>wsl.conf文件内容</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[boot]</span></span>
<span class="line"><span>systemd=true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>重启WSL</strong></p><p>需要通过 PowerShell 关闭 WSL 发行版以重启 WSL 实例</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-jufVs" id="tab-UygaRMm" checked><label for="tab-UygaRMm">PowerShell</label></div><div class="blocks"><div class="language-PowerShell vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">PowerShell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">wsl.exe</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">shutdown</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><div class="tip custom-block"><p class="custom-block-title">配置更改的 8 秒规则</p><p>必须等到运行你的 Linux 发行版的子系统完全停止运行并重启，配置设置更新才会显示。 这通常需要关闭发行版 shell 的所有实例后大约 8 秒。</p></div><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><p>微软官方文档 <a href="https://learn.microsoft.com/zh-cn/windows/wsl/install" target="_blank" rel="noreferrer">安装WSL</a><br> 微软官方文档 <a href="https://learn.microsoft.com/zh-cn/windows/wsl/wsl-config#wslconfig" target="_blank" rel="noreferrer">WSL 中的高级设置配置</a></p>`,30)]))}const u=a(l,[["render",p]]);export{o as __pageData,u as default};
