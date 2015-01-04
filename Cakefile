fs = require 'fs'
coffee = require 'coffee-script'
path = require 'path'

# all files uses to compile
lists_files = [
  'lib/ipfilter.coffee'
]

build = (callback) ->
  console.log '-----------------------------     Start BUILD      -------------------------------'

  # compile every files
  current_dirname = __dirname
  console.log 'Start Writing files'
  for filename in lists_files
    path_file = path.join( current_dirname, filename )
    new_path_file = path.join( path.dirname(path_file) , path.basename(path_file, '.coffee') + '.js' )
    console.log "Extracted files #{ path_file }"
    compiled_text = coffee._compileFile( path_file )
    fs.writeFileSync new_path_file, compiled_text
    console.log "Compiled files #{ path_file } => #{ new_path_file }"
  console.log 'End writing files'
  console.log '-----------------------------     End BUILD      ----------------------------------'


buildAll = ->
  console.error 'Function To implement'


# task lists
task 'build', 'Compiling File Lists', ->
  build()

task 'build_all', 'Compiling all on all directory', ->
  buildAll()