var searchIndex = {};
searchIndex['vgrs'] = {"items":[[0,"","vgrs","This library lets Rust programs running inside Valgrind make\nvarious requests of Valgrind and its tools.  For now this only\nworks on Linux, FreeBSD or MacOS, and only on 32- or 64-bit x86, but\nsupport for other platforms should be easy.",null,null],[0,"valgrind","","Client requests for the Valgrind core itself.",null,null],[5,"running_on_valgrind","vgrs::valgrind","",null,{"inputs":[],"output":{"name":"usize"}}],[5,"count_errors","","",null,{"inputs":[],"output":{"name":"usize"}}],[5,"discard_translations","","",null,null],[5,"monitor_command","","",null,{"inputs":[{"name":"str"}],"output":null}],[0,"memcheck","vgrs","Client requests for the Memcheck memory error\ndetector tool.",null,null],[3,"LeakCount","vgrs::memcheck","Result of `count_leaks` or `count_leak_blocks`, in\nbytes or blocks respectively.",null,null],[12,"leaked","","",0,null],[12,"dubious","","",0,null],[12,"reachable","","",0,null],[12,"suppressed","","",0,null],[5,"malloclike_block","","",null,null],[5,"resizeinplace_block","","",null,null],[5,"freelike_block","","",null,null],[5,"make_mem_noaccess","","",null,null],[5,"make_noaccess","","",null,null],[5,"make_mem_undefined","","",null,null],[5,"make_undefined","","",null,null],[5,"make_mem_defined","","",null,null],[5,"make_defined","","",null,null],[5,"make_mem_defined_if_addressable","","",null,null],[5,"make_defined_if_addressable","","",null,null],[5,"check_mem_is_addressable","","",null,null],[5,"check_is_addressable","","",null,null],[5,"check_mem_is_defined","","",null,null],[5,"check_is_defined","","",null,null],[5,"do_leak_check","","",null,{"inputs":[],"output":null}],[5,"do_added_leak_check","","",null,{"inputs":[],"output":null}],[5,"do_changed_leak_check","","",null,{"inputs":[],"output":null}],[5,"do_quick_leak_check","","",null,{"inputs":[],"output":null}],[5,"count_leaks","","",null,{"inputs":[],"output":{"name":"leakcount"}}],[5,"count_leak_blocks","","",null,{"inputs":[],"output":{"name":"leakcount"}}],[11,"clone","","",0,{"inputs":[{"name":"leakcount"}],"output":{"name":"leakcount"}}],[0,"callgrind","vgrs","Client requests for the Callgrind profiler tool.",null,null],[5,"dump_stats","vgrs::callgrind","",null,null],[5,"dump_stats_at","","",null,{"inputs":[{"name":"str"}],"output":null}],[5,"zero_stats","","",null,null],[5,"toggle_collect","","",null,null],[5,"start_instrumentation","","",null,null],[5,"stop_instrumentation","","",null,null],[0,"helgrind","vgrs","Client requests for the Helgrind thread error\ndetector tool.",null,null],[5,"clean_memory","vgrs::helgrind","",null,null],[5,"clean","","",null,null],[0,"drd","vgrs","Client requests for the DRD thread error\ndetector tool.",null,null],[5,"clean_memory","vgrs::drd","",null,null],[5,"clean","","",null,null],[5,"get_valgrind_threadid","","",null,{"inputs":[],"output":{"name":"c_uint"}}],[5,"get_drd_threadid","","",null,{"inputs":[],"output":{"name":"c_uint"}}],[5,"annotate_benign_race_sized","","",null,null],[5,"annotate_benign_race","","",null,null],[5,"stop_ignoring_sized","","",null,null],[5,"stop_ignoring","","",null,null],[5,"trace_sized","","",null,null],[5,"trace","","",null,null],[5,"stop_tracing_sized","","",null,null],[5,"stop_tracing","","",null,null],[5,"ignore_reads_begin","","",null,{"inputs":[],"output":null}],[5,"ignore_reads_end","","",null,{"inputs":[],"output":null}],[5,"ignore_writes_begin","","",null,{"inputs":[],"output":null}],[5,"ignore_writes_end","","",null,{"inputs":[],"output":null}],[5,"annotate_thread_name","","",null,{"inputs":[{"name":"str"}],"output":null}]],"paths":[[3,"LeakCount"]]};
initSearch(searchIndex);
