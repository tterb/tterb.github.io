require 'html-proofer'

task :test do
  HTMLProofer.check_directories(
    ["./_site"], {
      :allow_hash_href => true,
      :assume_extension => true,
      :check_favicon => true,
      :check_html => true,
      :http_status_ignore => [999, 522, 403],
      :url_swap => { 
        'https://brettstevenson.io/dev' => '/dev', 
        'https://brettstevenson.io/design' => '/design', 
        'https://brettstevenson.io/blog' => '/blog',
        'https://brettstevenson.io/archive' => '/archive',
        'https://brettstevenson.io/tags' => '/tags',
        'https://brettstevenson.io/credits' => '/credits'
      },
      :parallel => { :in_processes => 4 },
      :only_4xx => true,
      :url_ignore => ["/^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?linkedin\.com(?:/.*)?$/"],
      :empty_alt_ignore => false,
      :verbose => true,
      :typhoeus => { :timeout => 4 }
    }).run
end
